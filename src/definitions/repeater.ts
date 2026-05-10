import {type FormKitNode, type FormKitTypeDefinition} from "@formkit/core";
import {createInput} from "@formkit/vue";
import { useFormKitSchema} from "../composables/useFormKitSchema"
const { addList, addElement, addListGroup, addComponent, addElementsInOuterDiv } = useFormKitSchema()

function addActionButtons(innerClass: string = '', outerClass: string = '', label: string = 'Actions', help: string = '', render: string = 'true') {
    const addButtonComponent = (onClick: string = '', label: string = '', icon: string = '', severity: string = '', render: string = 'true', styleClass: string = 'p-button-sm'): object => {
        return addComponent('Button', { onClick, label, icon, class: styleClass, severity }, render)
    }

    return addElementsInOuterDiv([
        addButtonComponent('$removeNode($node.parent, $index)', '', 'pi pi-times', 'danger','$renderDeleteButton'),
        addButtonComponent('$cloneNode($node.parent, $index)', '', 'pi pi-clone',  '', '$renderCloneButton'),
        addButtonComponent('$moveNodeUp($node.parent, $index)', '', 'pi pi-arrow-up', 'secondary', '$index != 0 && $renderMoveButtons'),
        addButtonComponent('$moveNodeDown($node.parent, $index)', '', 'pi pi-arrow-down', 'secondary', '$index < $node.parent.value.length -1 && $renderMoveButtons'),
    ], innerClass, outerClass, label, help, render)
}

function combineListGroupChildren(children: object[] = [], additionalChildren: object[] = [] ) {
    return [...children, ...additionalChildren]
}

export const primeRepeaterDefinition: FormKitTypeDefinition = createInput(
    [
        addElement('div', [
            addList('$listName', [
                addComponent('Button', { onClick: '$addNode($node)', label: '$addButtonLabel', size: 'small', icon: 'pi pi-plus', class: '$addButtonClass' }, '$node.children.length == 0 && $renderAddButton'),
                addListGroup([
                    addElement('div', [
                        {
                            children: '$slots.default'
                        },
                        addActionButtons('$buttonsInnerClass', '$buttonsOuterClass', '$buttonsLabel' ),
                    ], {class: '$itemClass'}),

                ]),
            ], true, 'true'),
        ], { class: '$listClass' }),


    ],
    {
        props: ['buttonsOuterClass', 'buttonsInnerClass', 'buttonsLabel', 'addButtonLabel', 'addButtonClass', 'newItem', 'itemClass', 'listClass', 'hideMoveButtons', 'hideCloneButton', 'hideDeleteButton', 'hideAddButton'],
        features: [addRepeaterHandler]
    }
)

function addRepeaterHandler(node: FormKitNode): void {
    const swapElements = (array: any[], index1: number, index2: number) => {
        const newArray = [...array]
        const temp = newArray[index1]
        newArray[index1] = newArray[index2]
        newArray[index2] = temp
        return newArray
    }
    node.on('created', () => {
        console.error('Created repeater node', node.context.hideMoveButtons)
        node.context.listName = node.name
        node.context.renderMoveButtons = !node.context.hideMoveButtons
        node.context.renderCloneButton = !node.context.hideCloneButton
        node.context.renderDeleteButton = !node.context.hideDeleteButton
        node.context.renderAddButton = !node.context.hideAddButton
        node.context.removeNode = (parentNode: FormKitNode, index: number) => (): void => {
            if (parentNode && parentNode._value instanceof Array) {
                parentNode.input(parentNode._value.filter((_: any, i: number): boolean => i !== index), false)
            }
        }
        node.context.addNode = (parentNode: any) => (): void => {
            if (parentNode && parentNode._value instanceof Array) {
                const newArray: any[] = [...parentNode.value, node.context.newItem || {}]
                parentNode.input(newArray, false)
            }
        }
        node.context.cloneNode = (parentNode: any, index: number) => (): void => {
            if (parentNode && parentNode._value instanceof Array) {
                const item: any = parentNode.value[index]
                const newArray: any[] = [...parentNode.value.slice(0,index), {...item}, ...parentNode.value.slice(index)]
                parentNode.input([...newArray], false)
            }
        }
        node.context.moveNodeUp = (parentNode: any, index: number) => (): void => {
            if (parentNode && parentNode._value instanceof Array) {
                const array: any[] = [...parentNode.value]
                if (index > 0)
                    parentNode.input(swapElements(array, index - 1, index), false)
            }
        }
        node.context.moveNodeDown = (parentNode: any, index: number) => (): void => {
            if (parentNode && parentNode._value instanceof Array) {
                const array: any[] = [...parentNode.value]
            if (index < array.length - 1)
                parentNode.input(swapElements(array, index, index + 1), false)
                }
        }
    })
}


/**
 * AutoBind decorator
 */
function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value;
    const autobindDescriptor: PropertyDescriptor = {
        configurable: true, 
        get() {
            const boundFunction = originalFunction.bind(this);
            return boundFunction
        }
    }

    return autobindDescriptor;
}

/**
 * Project Input Class | Handle Form
 */
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        /**
         * Load template
         */
        const importedNode = document.importNode(this.templateElement.content, true)

        /**
         * Store template content (first child)
         */
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input'

        /**
         * Add event listeners to form element
         */
        this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

        this.configure();

        /**
         * Insert Element to DOM | Render
         */
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value
        const enteredDescription = this.descriptionInputElement.value
        const enteredPeople = this.peopleInputElement.value

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
            alert('Invalid input, please try again!')
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }
    }

    private clearInputs() {
        this.titleInputElement.value = ''
        this.descriptionInputElement.value = ''
        this.peopleInputElement.value = ''
    }

    /**
     * Handle form submission
     * @param event Event
     */
    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();

        /**
         * Only if userInput is a tuple
         */
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people)

            this.clearInputs();
        }
    }

    /**
     * Add event listener to the <form /> element
     */
    private configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    private attach() {
        /**
         * Render template child element to the `root`
         */
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }

}

new ProjectInput();
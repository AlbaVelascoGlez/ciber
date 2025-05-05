document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Función para crear y mostrar mensaje de error
    function showError(input, message) {
        // Eliminar mensaje de error anterior si existe
        const previousError = input.nextElementSibling;
        if (previousError && previousError.classList.contains('error-message')) {
            previousError.remove();
        }

    
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
        
        input.classList.add('error');
    }

    // Función para eliminar mensaje de error
    function removeError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.remove();
        }
        input.classList.remove('error');
    }

    // Función para validar campos
    function validateFields() {
        let isValid = true;

        // Validar nombre
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'El nombre es obligatorio');
            isValid = false;
        } else {
            removeError(nameInput);
        }

        // Validar email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El email es obligatorio');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Validar asunto
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'El asunto es obligatorio');
            isValid = false;
        } else {
            removeError(subjectInput);
        }

        // Validar mensaje
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'El mensaje es obligatorio');
            isValid = false;
        } else {
            removeError(messageInput);
        }

        return isValid;
    }

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'El nombre es obligatorio');
        } else {
            removeError(nameInput);
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'El email es obligatorio');
        } else {
            removeError(emailInput);
        }
    });

    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'El asunto es obligatorio');
        } else {
            removeError(subjectInput);
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'El mensaje es obligatorio');
        } else {
            removeError(messageInput);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateFields()) {
      
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value,
                date: new Date().toISOString()
            };

            // Obtener mensajes existentes del localStorage
            let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
            
            messages.push(formData);
            
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            successMessage.style.display = 'block';
            
            form.reset();
       
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    });
}); 
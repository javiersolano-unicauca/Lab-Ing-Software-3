import { Component, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var Toastify: any;

@Component({
  selector: 'app-section3',
  imports: [FormsModule],
  templateUrl: './section3.html',
  styleUrl: './section3.css',
})
export class Section3  implements AfterViewInit {

  private renderer: Renderer2;

  @ViewChild('identificacion') inputTipoIdentificacion!: ElementRef<HTMLSelectElement>; 
  @ViewChild('numeroIdentificacion') inputIdentificacion!: ElementRef<HTMLInputElement>;
  @ViewChild('nombres') inputNombres!: ElementRef<HTMLInputElement>;
  @ViewChild('apellidos') inputApellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('correoElectronico') inputCorreoElectronico!: ElementRef<HTMLInputElement>;
  @ViewChild('formularioContacto') formulario!: ElementRef<HTMLFormElement>;
  @ViewChildren('generoRadio') inputGenero!: QueryList<ElementRef<HTMLInputElement>>;

  @ViewChild('errorTipoIdentificacion') labelErrorTipoIdentificacion!: ElementRef;
  @ViewChild('errorNumeroIdentificacion') labelErrorNumeroIdentificacion!: ElementRef;
  @ViewChild('errorNombres') labelErrorNombres!: ElementRef;
  @ViewChild('errorApellidos') labelErrorApellidos!: ElementRef;
  @ViewChild('errorCorreo') labelErrorCorreo!: ElementRef;
  @ViewChild('errorGenero') labelErrorGenero!: ElementRef;

  constructor(prmRenderer: Renderer2)
  {
    this.renderer = prmRenderer;
  }

  private validarCampoObligatorio(campo: ElementRef, errorElement: ElementRef, mensaje: string): boolean
  {  
    if(campo.nativeElement.value.trim() === '') 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', mensaje);
      return false;
    } 
    else 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', '');
      return true;
    }
  }

  private validarLongitud(campo: ElementRef, errorElement: ElementRef, min: number, max: number, mensaje: string): boolean
  {
    const length = campo.nativeElement.value.length;
    
    if(length < min || length > max) 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', mensaje);
      return false;
    } 
    else 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', '');
      return true;
    }
  }

  private validarCorreo(campo: ElementRef, errorElement: ElementRef, mensaje: string): boolean
  {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;

    if(!correoRegex.test(campo.nativeElement.value)) 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', mensaje);
      return false;
    } 
    else 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', '');
      return true;
    }
  }

  private validarGenero(genero: QueryList<ElementRef<HTMLInputElement>>, errorElement: ElementRef, mensaje: string): boolean 
  {
    let seleccionado = false;

    genero.forEach(radio => {
        if(radio.nativeElement.checked) {
          seleccionado = true;
          return;
        }
    });

    if (!seleccionado) 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', mensaje);
      return false;
    } 
    else 
    {
      this.renderer.setProperty(errorElement.nativeElement, 'textContent', '');
      return true;
    }
  }

  private mostrarMensajeExito(): void 
  {
      Toastify({
          text: "✅ ¡Registro exitoso!",
          duration: 3000,            // Duración: 3 segundos
          gravity: "top",             // Posición: arriba
          position: "right",          // Alineación: derecha
          style: {
              background: "rgba(0, 128, 0, 0.8)",  // Verde con transparencia
              color: "#fff",                      // Texto blanco
              borderRadius: "12px",               // Esquinas redondeadas
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Sombra ligera
              padding: "12px 20px"               // Más relleno
          },
          stopOnFocus: true, // No desaparecer al pasar el mouse
      }).showToast();
  }

  // Función principal que valida todo el formulario
  public validarFormulario(): boolean
  {
    const tipoIdentificacionValida = this.validarCampoObligatorio(this.inputTipoIdentificacion,this.labelErrorTipoIdentificacion,"El tipo de identificación es obligatorio");
    const identificacionValida = this.validarCampoObligatorio(this.inputIdentificacion,this.labelErrorNumeroIdentificacion, 'La identificación es obligatoria');
    const nombresValidos = this.validarLongitud(this.inputNombres,this.labelErrorNombres , 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
    const apellidosValidos = this.validarLongitud(this.inputApellidos,this.labelErrorApellidos , 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
    const correoValido = this.validarCorreo(this.inputCorreoElectronico, this.labelErrorCorreo,'El correo debe tener el dominio @unicauca.edu.co');
    const generoValido = this.validarGenero(this.inputGenero,this.labelErrorGenero,'El género es obligatorio' );

    // Si todas las validaciones son correctas, se devuelve true y se puede enviar el formulario al servidor
    if (tipoIdentificacionValida && identificacionValida && nombresValidos && apellidosValidos && correoValido && generoValido) {
        this.mostrarMensajeExito(); 
        this.formulario.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });  
        this.formulario.nativeElement.classList.add("was-validated");      
        setTimeout(() => {
            this.formulario.nativeElement.reset();
        }, 2000);
        return false; // Evita el envío del formulario
    } else {
      
        alert('Por favor, complete correctamente el formulario.');
        return false; // Bloquea el envío del formulario
    }
  }

  private validarCamposAlCambiarFoco(): void
  {
    if(!this.inputTipoIdentificacion || !this.inputIdentificacion || !this.inputNombres) return;
  
    this.renderer.listen(this.inputTipoIdentificacion.nativeElement, 'blur', () => {
      this.validarCampoObligatorio(this.inputTipoIdentificacion, this.labelErrorTipoIdentificacion, "El tipo de identificación es obligatorio");
    });
    this.renderer.listen(this.inputIdentificacion.nativeElement, 'blur', () => {
      this.validarCampoObligatorio(this.inputIdentificacion, this.labelErrorNumeroIdentificacion, 'El número de id es obligatorio.');
    });
    this.renderer.listen(this.inputNombres.nativeElement, 'blur', () => {
      this.validarLongitud(this.inputNombres, this.labelErrorNombres, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres.');
    });
    this.renderer.listen(this.inputApellidos.nativeElement, 'blur', () => {
      this.validarLongitud(this.inputApellidos, this.labelErrorApellidos, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres.');
    });
    this.renderer.listen(this.inputCorreoElectronico.nativeElement, 'blur', () => {
      this.validarCorreo(this.inputCorreoElectronico, this.labelErrorCorreo, 'El correo debe tener el dominio @unicauca.edu.co');
    });

    this.inputGenero.forEach(radio => {
      this.renderer.listen(radio.nativeElement, 'blur', () => {
        this.validarGenero(this.inputGenero, this.labelErrorGenero, 'El género es obligatorio');
      });
    });
  }

  ngAfterViewInit(): void 
  {
    this.validarCamposAlCambiarFoco();
  }
}

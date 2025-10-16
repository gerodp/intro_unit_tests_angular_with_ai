
# intro_unit_tests_angular_with_ai

Proyecto de ejemplo para introducir a desarrolladores en las pruebas unitarias en Angular.

## Descripción

Este repositorio contiene un proyecto Angular mínimo con ejemplos básicos de componentes, servicios y sus pruebas unitarias. Está pensado como material didáctico para aprender las prácticas y herramientas comunes usadas al escribir tests en Angular.

## Propósito

- Mostrar cómo escribir y organizar pruebas unitarias (specs) para componentes, servicios y pipes.
- Enseñar a ejecutar las pruebas en local y en entornos de integración continua (CI).
- Proveer ejemplos pequeños y fáciles de entender que puedas extender.

## Requisitos

- Node.js (recomendado LTS, p. ej. 18+)
- npm o yarn
- Angular CLI (opcional, pero útil para comandos como `ng test`)

## Instalación

1. Clona el repositorio (si no lo has hecho):

	 ```bash
	 git clone <repo-url>
	 cd intro_unit_tests_angular_with_ai
	 ```

2. Instala las dependencias:

	 ```bash
	 npm install
	 # o con yarn
	 # yarn install
	 ```

## Ejecutar las pruebas

- Modo desarrollo (observando cambios):

	```bash
	npm run test
	# o con Angular CLI
	# ng test
	```

- Ejecutar pruebas una sola vez (útil para CI):

	```bash
	npm run test -- --watch=false --browsers=ChromeHeadless
	```

Nota: Asegúrate de que el entorno de CI tenga un navegador headless disponible (por ejemplo, ChromeHeadless) o que esté configurado `karma-chrome-launcher` para CI.

## Estructura del proyecto (alto nivel)

- `src/app/` — código de la aplicación y ejemplos de componentes
- `src/**/*.spec.ts` — archivos de pruebas unitarias para componentes, servicios y pipes

## Buenas prácticas incluidas

- Tests pequeños y deterministas
- Uso de TestBed para configurar módulos de pruebas
- Mocking/espías en servicios cuando es necesario

## Contribuciones

Si quieres mejorar los ejemplos o añadir más pruebas, abre un pull request o crea un issue describiendo la mejora.

## Licencia

Licencia abierta — revisa el archivo de licencia si se agrega uno, o usa la que prefieras para tu proyecto.

---

Este README está pensado para ser una guía rápida; extiende los ejemplos dentro del repositorio para practicar más casos de pruebas en Angular.

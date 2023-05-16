## Age-Calculator

This is a challenge from Frontend Mentor

## Live presentation

[https://kevinhouguet.github.io/age-calculator/](https://kevinhouguet.github.io/age-calculator/)

## Learning

Using of css native variable :

```css
:root {
  --main-bg-color: #f0f0f0;
  --container-bg-color: var(--neutral-white);
  --primary-purple: hsl(259, 100%, 65%);
  --primary-red-light: hsl(0, 100%, 67%);
  --neutral-white: hsl(0, 0%, 100%);
  --neutral-off-white: hsl(0, 0%, 94%);
  --neutral-light-gray: hsl(0, 0%, 86%);
  --neutral-smokey-gray: hsl(0, 1%, 44%);
  --neutral-off-black: hsl(0, 0%, 8%);
  --font-size: 32px;
  --font-family: 'Poppins', sans-serif;
  --font-weight-italic: 400;
  --font-weight-regular: 700;
  --font-weight-bold: 800;
}

body {
  background-color: var(--main-bg-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight-regular);
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

Import multi fonts :

```css
@font-face {
  font-family: 'Poppins';
  src: url(./assets/fonts/Poppins-Italic.ttf) format('truetype');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'Poppins';
  src: url(./assets/fonts/Poppins-Bold.ttf) format('truetype');
  font-weight: 700;
  font-style: bold;
}

@font-face {
  font-family: 'Poppins';
  src: url(./assets/fonts/Poppins-ExtraBoldItalic.ttf) format('truetype');
  font-weight: 800;
  font-style: italic;
}
```

outline input :
```css
&__input {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--neutral-light-gray);
}

&__input::placeholder {
  color: var(--neutral-light-gray);
}
&__input:focus-visible {
  outline: var(--primary-purple) thin solid;
}
```
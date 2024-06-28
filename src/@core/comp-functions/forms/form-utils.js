<<<<<<< HEAD
export const useInputImageRenderer = (inputEl, callback) => {
  const inputImageRenderer = () => {
    const file = inputEl.value.files[0]
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        callback(reader.result)
      },
      false,
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  return {
    inputImageRenderer,
  }
}

export const _ = null
=======
export const useInputImageRenderer = (inputEl, callback) => {
  const inputImageRenderer = () => {
    const file = inputEl.value.files[0]
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        callback(reader.result)
      },
      false,
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  return {
    inputImageRenderer,
  }
}

export const _ = null
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90

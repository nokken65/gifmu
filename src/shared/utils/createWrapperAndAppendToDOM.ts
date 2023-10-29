type CreateWrapperAndAppendToDOMConfig = {
  wrapperId: string
  domElement?: Element
  prepend?: boolean
}

export const createWrapperAndAppendToDOM = ({
  wrapperId,
  domElement = document.body,
  prepend = false
}: CreateWrapperAndAppendToDOMConfig) => {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)

  if (prepend) {
    domElement.prepend(wrapperElement)
  } else {
    domElement.append(wrapperElement)
  }

  return wrapperElement
}

export const getNodeCharacteristics = (id: string) => {
  const sourceNode = document.getElementById(`node-${id}`);

  const translate = sourceNode?.style.getPropertyValue("transform").match(/\d+/g);

  const width = sourceNode?.offsetWidth ?? 0;
  const height = sourceNode?.offsetHeight ?? 0;

  const translateX = Number(translate ? translate[0] : 0);
  const translateY = Number(translate ? translate[1] : 0);

  const left = Number(sourceNode?.clientLeft);
  const top = Number(sourceNode?.clientTop);

  return {
    width,
    height,
    translateX,
    translateY,
    left,
    top
  }
}
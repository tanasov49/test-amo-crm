declare module "*.jpg"

declare module "*.jpeg"

declare module "*.png"

declare module "*.gif"
// Отдельно использовать для импорта SVG, в качестве компонента и ссылки на изображение
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.svg?url" {
  const content: string;
  export default content;
}

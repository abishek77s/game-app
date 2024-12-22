import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImage = (url:string, type?: "wxh" | "wx") =>{
    if (!url) return noImage;
 const target = 'media/';
 const index = url.indexOf(target) + target.length
 if (type=== "wx") return url.slice(0, index) + 'resize/600/-/' +url.slice(index)

return url.slice(0, index) + 'crop/600/400/' +url.slice(index)
}

export default getCroppedImage;
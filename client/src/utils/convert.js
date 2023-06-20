//* image onto base64
 function convertToBase64 (File) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(File)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (err) => {
            reject(err)
        }
    })
}


//  function handleImageUpload(event) {
//     var options = {
//       maxSizeMB: 0.4,
//       maxWidthOrHeight: 1920,
//       useWebWorker: true
//     }
//     imageCompression(event, options)
//       .then(function (compressedFile) {
//         return convertToBase64(compressedFile);
//       })
//       .catch(function (error) {
//         console.log(error.message);
//       });
//   }

export  {convertToBase64 }

 







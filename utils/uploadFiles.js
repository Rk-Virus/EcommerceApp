import { getUrls, sendToS3 } from "../Apis/commonApis"

export const uploadFiles = async (files, folder = 'images') => {
    try {
        console.log('files', files._data.name)
        // const fileNames = Array.from(files).
        //     map((item) => {
        //         console.log('item', item)
        //         console.log('item1', item?.file?.name)
        //         return item?.name
        //     })
        //     console.log('fileNames', fileNames)
        const fileNames = [files._data.name]  //since we are uploading single imag
        if (fileNames.length) {
            const { data } = await getUrls({ fileNames, folder })
            if (data) {
                let respUrls = await Promise.all(data.map(async (url, i) => {
                    await sendToS3(files, url)
                    return url.split('?')[0]
                }))
                if (respUrls) return respUrls
            } else {
                throw new Error('Something went wrong')
            }
        }else{
            throw new Error('No files to upload')
        }
    } catch (error) {
        console.log("uploadFile", error)
        return error
    }

}
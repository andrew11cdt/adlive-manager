import axios from "axios";
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/upload`
import {MockCloudinaryVideo} from "./mock-api";
import { VideoResponseData } from "./types/cloudinary-response";
function createFormData(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "h0b1zgy4");
  return formData
}
export default class CloudinaryApi {
  static async uploadVideo(data): Promise<VideoResponseData> {
    // const mock: any = MockCloudinaryVideo()
    // return mock
    const res = await axios.post(UPLOAD_URL, createFormData(data))
    if (res && res.status == 200) return res.data
  }
}
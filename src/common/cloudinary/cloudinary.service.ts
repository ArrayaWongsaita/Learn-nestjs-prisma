import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

import { v2, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(
        file,
        { folder: 'nestjs-cloudinary' },
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        },
      );
    });
  }
}

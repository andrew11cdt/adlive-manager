export default function MockApiCampaign() {
  return new Promise((res, rej) =>
    res([
      {
        title: "Campaign 01",
        from: "2021-05-21T16:37:04.000Z",
        to: "2021-06-21T16:37:04.000Z",
        status: "draft",
        videos: [
          {
            name: "video_1.mp4",
            photoUrl: "https://images.unsplash.com/photo-1622237522665-f25c0139ab06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80",
          },
          {
            name: "video_2.mp4",
            photoUrl: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
          },
        ],
      },
      {
        title: "Campaign 02",
        from: "2021-05-21T16:37:04.000Z",
        to: "2021-07-21T16:37:04.000Z",
        status: "live",
        videos: [
          {
            name: "video_2.mp4",
            photoUrl: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          },
          {
            name: "video_3.mp4",
            photoUrl: "https://images.unsplash.com/photo-1622220401744-a1d02cc041da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80",
          },
        ],
      },
      {
        title: "Campaign 03",
        from: "2021-05-21T16:37:04.000Z",
        to: "2021-07-21T16:37:04.000Z",
        status: "paused",
        videos: [
          {
            name: "video_4.mp4",
            photoUrl: "https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
          },
          {
            name: "video_5.mp4",
            photoUrl: "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
          },
        ],
      },
    ])
  );
}
export function MockApiScreens() {
  return new Promise((res, rej) =>
    res([
      {
        recId: "recQCOMt04mgePNYo",
        id: 4,
        code: "YDZOQNHT",
        deviceCode: "12",
        deviceType: "SmartTV SamSung",
        deviceName: "TV SamSung H2",
        deviceIp: "192.168.1.101",
        deviceOS: "Android 10",
        appVersion: "1.0.0",
        createdAt: "2021-05-16T10:13:59.000Z",
        status: "offline",
      },
      {
        recId: "recQCOMt04mgePNYo",
        id: 4,
        code: "YDZOQNHT",
        deviceCode: "12",
        deviceType: "SmartTV SamSung",
        deviceName: "TV SamSung H2",
        deviceIp: "192.168.1.101",
        deviceOS: "Android 10",
        appVersion: "1.0.0",
        createdAt: "2021-05-16T10:13:59.000Z",
        status: "offline",
      },
      {
        recId: "recQCOMt04mgePNYo",
        id: 4,
        code: "YDZOQNHT",
        deviceCode: "12",
        deviceType: "SmartTV SamSung",
        deviceName: "TV SamSung H2",
        deviceIp: "192.168.1.101",
        deviceOS: "Android 10",
        appVersion: "1.0.0",
        createdAt: "2021-05-16T10:13:59.000Z",
        status: "live",
      },
    ])
  )
}

export function MockCloudinaryVideo() {
  return new Promise((res, rej) =>
    res(
      {
        "asset_id": "3bfde8c3c31bd98291b9cd9e4b62ad60",
        "public_id": "adlive/fss6oxr5idazpdjx4gih", 
        "version": 1623145133, 
        "version_id": "61a4a23dd702b85ed6b1f508d5361439", 
        "signature": "50361a96544946ce0be3825908231f6e4d8bba5f", 
        "width": 1920, "height": 1080, 
        "format": "mp4", 
        "resource_type": "video", 
        "created_at": "2021-06-08T09:38:53Z",
        "tags": [], "pages": 0, "bytes": 16515665,
        "type": "upload",
        "etag": "11ad9aeb7fa7b5f042ad50603ab95998", "placeholder": false,
        "url": "http://res.cloudinary.com/dngez6bhp/video/upload/v1623145133/adlive/fss6oxr5idazpdjx4gih.mp4",
        "secure_url": "https://res.cloudinary.com/dngez6bhp/video/upload/v1623145133/adlive/fss6oxr5idazpdjx4gih.mp4",
        "access_mode": "public",
        "audio": { "codec": "aac", "bit_rate": "127999", "frequency": 44100, "channels": 2, "channel_layout": "stereo" },
        "video": { "pix_format": "yuv420p", "codec": "h264", "level": 40, "profile": "High", "bit_rate": "476893", "dar": "16:9", "time_base": "1/30000" },
        "is_audio": false, "frame_rate": 29.97002997002997, "bit_rate": 613361,
        "duration": 215.411519,
        "rotation": 0,
        "original_filename": "yt1s.com - Post Malone  Circles Lyrics",
        "nb_frames": 6454
      }
    )
  )
}

export function MockCVideos() {
  return new Promise((res, rej) =>
    res([
      {
        "recId": "rec123456",
        "id": 1,
        "name": "yt1s.com - Post Malone  Circles Lyrics",
        "url": "https://res.cloudinary.com/dngez6bhp/video/upload/v1623145133/adlive/fss6oxr5idazpdjx4gih.mp4"
      },
      {
        "recId": "rec232352",
        "id": 2,
        "name": "Yeu em qua dong tin nhan",
        "url": "https://res.cloudinary.com/dngez6bhp/video/upload/v1623145868/adlive/vb8ehfuvxtg8h6owkpoy.mp4"
      },
      {
        "recId": "rec24384dfd",
        "id": 3,
        "name": "yt1s.com - Post Malone  Circles Lyrics",
        "url": "https://res.cloudinary.com/dngez6bhp/video/upload/v1623145133/adlive/fss6oxr5idazpdjx4gih.mp4"
      },
    ])
  )
}
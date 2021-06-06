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
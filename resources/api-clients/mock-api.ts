export default function MockApiCampaign() {
  return new Promise((res, rej) =>
      res([
        {
          title: "Campaign 01",
          from: "14/06/2021",
          to: "20/01/2021",
          status: "draft",
          videos: [
            {
              
              photoUrl: "https://images.unsplash.com/photo-1622237522665-f25c0139ab06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80",
            },
            {
              photoUrl: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            },
          ],
        },
        {
          title: "Campaign 02",
          from: "14/06/2021",
          to: "20/01/2021",
          status: "live",
          videos: [
            {

              photoUrl: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            },
            {
              photoUrl: "https://images.unsplash.com/photo-1622220401744-a1d02cc041da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80",
            },
          ],
        },
        {
          title: "Campaign 03",
          from: "14/06/2021",
          to: "20/01/2021",
          status: "paused",
          videos: [
            {

              photoUrl: "https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
            },
            {
              photoUrl: "https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
            },
          ],
        },
      ])
    );
}
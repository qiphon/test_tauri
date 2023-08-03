import { getClient, ResponseType, Body } from "@tauri-apps/api/http";

console.log("hello tauri");

const req = await getClient();

console.log(req.get);

req
  .post(
    "https://dl.reg.163.com/dl/zj/mail/l",
    Body.json({
      encParams:
        "03cfcda334cf5ae1507e33a9f7e0f6d5c8a4900d744861a06a23e8357c16b9cfb0e9332d77d4f56785fc9670cb72188bdd9ef5dd2905b7813c5a0626c82af7f19ddbb8ca51dc5d9f968b85e9624c7edbaf334c363d874aa45d14864890ba5ecd6706fb9a96288d8242f597daa1c05ee695de375d462fdf4a5b32d3041c84fcfd4fa2bc5c9de0dcb0d20644cb85a9f032509be88a122eca695ca07662ea0f57a58d90273fab59fbfaa91046b323736f12949bd5d8d7d79698c6469ec2c4114588e562a5cf3ba5862082ea15bc2a5101bcd34d4ec55b1084c78c9cef89d9f54239baae141463ef55b96214fe8fa0ffaaa0b5fc231789475105c8991527d3e0be2e376d920f52526f1ea886686b2d8a0c86b532e83197e98fee530e9a50440f57da2f12cec5fda3d4ba3c2446b5232e7266f3bb0e861576845359e600b004ee9d0d1fe9d5ff1b99f3d86fa678d15086a1f1d7e88947977e27a85753ff75b15ed704619447ec4d1a50363926f2e1988a3783a9d45ddd52652eeaf1e35f8d839ad54deb87395d86bde6440d7f9e510043d84c9cbd980a6341e32afb88e62c8eee5c958b35d2a69a88b15dccfdddbdb876e970cbac47a4b97a1c3f84d72971c7720a6a",
    }),
    {
      responseType: ResponseType.JSON,
      headers: {
        Accept: "*/*",
        "Accept-Language": "zh,en;q=0.9",
        Connection: "keep-alive",
        "Content-Type": "application/json",
        // Cookie:
        //   "_ntes_nuid=35bacec37e45b18cd2aa20e5de10e74e; NTES_PC_IP=%E5%8C%97%E4%BA%AC%7C%E5%8C%97%E4%BA%AC; utid=HxYE04GU6Ls2KA6zqtq7XqEsAHEwT1jz; NTES_WEB_FP=48c45f30461488df676dbaf34bd5bbcc; l_s_mail163fjWGUOS=1328C8C807EFAA655C3AC02102019F3DCEFE83458EC9B39F2632707CBEF8F2D1A347F8A09AECB1DB3494AEC0886D4A87865DD20A382A29495CDABB04C3549564C91D96361C7D62E7B518B1F9AF51821ED16AAAC48B77A2DE08C13E0E5E83847C6112BC98D06589288DD93101B92029A3",
        // DNT: "1",
        // Origin: "https://dl.reg.163.com",
        // Referer:
        //   "https://dl.reg.163.com/webzj/v1.0.1/pub/index_dl2_new.html?cd=https%3A%2F%2Fmimg.127.net%2Fp%2Ffreemail%2Findex%2Femail%2Fcss%2F&cf=urs.163.c27db46c.css&MGID=1690960186019.6917&wdaId=&pkid=fjWGUOS&product=mail163",
        // "Sec-Fetch-Dest": "empty",
        // "Sec-Fetch-Mode": "cors",
        // "Sec-Fetch-Site": "same-origin",
        // "User-Agent":
        //   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        // "sec-ch-ua":
        //   '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        // "sec-ch-ua-mobile": "?0",
        // "sec-ch-ua-platform": "macOS",
      },
    },
  )
  .then((resp) => {
    console.log(resp.data);
    console.log(resp);
  });

/**
   * 
   * 
   * curl 'https://dl.reg.163.com/dl/zj/mail/gt' \
  -H 'Accept-Language: zh,en;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: _ntes_nuid=35bacec37e45b18cd2aa20e5de10e74e; NTES_PC_IP=%E5%8C%97%E4%BA%AC%7C%E5%8C%97%E4%BA%AC; utid=HxYE04GU6Ls2KA6zqtq7XqEsAHEwT1jz; NTES_WEB_FP=48c45f30461488df676dbaf34bd5bbcc; l_s_mail163fjWGUOS=1328C8C807EFAA655C3AC02102019F3DCEFE83458EC9B39F2632707CBEF8F2D1A347F8A09AECB1DB3494AEC0886D4A87865DD20A382A29495CDABB04C3549564C91D96361C7D62E7B518B1F9AF51821ED16AAAC48B77A2DE08C13E0E5E83847C6112BC98D06589288DD93101B92029A3' \
  -H 'DNT: 1' \
  -H 'Origin: https://dl.reg.163.com' \
  -H 'Referer: https://dl.reg.163.com/webzj/v1.0.1/pub/index_dl2_new.html?cd=https%3A%2F%2Fmimg.127.net%2Fp%2Ffreemail%2Findex%2Femail%2Fcss%2F&cf=urs.163.c27db46c.css&MGID=1690960186019.6917&wdaId=&pkid=fjWGUOS&product=mail163' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"encParams":"03cfcda334cf5ae1507e33a9f7e0f6d5af1e59aebbd3863e8f81e8a0a6c108a361672e8bffea6d7e0b8fab370d4736ece6234dda11a946aeb55904d94caec4bb68801df02501b0356b78d554fe697d624ae0974fc43755fd3f83bfb7b1ca522f9cf8b55e861e688b89dd6978501d7559ed95e67b5f66215708800d9733ff0ea5b7bbcd76937a030b61a64401defe0ef4509ff0ccf1aa673ca6240b1bb1d472f9"}' \
  --compressed
   */

const axios = require('axios')
const json2md = require("json2md")
const fs = require('fs')
const IMsitemap = require('./sitemapN');
//const GooGle = require('./goo');
const TOP1sitemap = require('./siteTOP1');
const sportAPI = '1e7119085ed943488f43e2df58f51363'

const baseSPORT = 'https://newsapi.org/v2/top-headlines?country=th&category=sports&apiKey=1e7119085ed943488f43e2df58f51363'
// source file is iso-8859-15 but it is converted to utf-8 automatically
const ggyoutube = 'https://script.google.com/macros/s/AKfycbyopI8na2T56luSP0NtcXT6BwuYA2Zor0dulRBGhCl-sZt2vSVbxy6wNSXhJ8qhI9ZxSg/exec?q='

//let apiKey = "23c47f073826eb0cdc1c2abedbb006976e0e0549"

const today = new Date().toISOString().split('T')[0]

//https://images.google.de/url?q=https%3A%2F%2Fufapro888s.info%2F
//https://images.google.de/url?q=https%3A%2F%2Fufapro888s.info%2F
//https://maps.google.de/url?q=https%3A%2F%2Fufapro888s.info%2F


const getSSLINK = async (ufaxlink) => {
  let ssGlink = axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + ufaxlink)).then(token => { console.log(token.data.data.url)  } )
    //console.log(ssGlink)
   // return ssGlink.data.data.url;
}
//getSSLINK("https://maps.google.de/url?q=https%3A%2F%2Fufapro888s.info%2F")

Array.prototype.randomEM = function () {
  return this[Math.floor(Math.random() * this.length)];
}

let top1 = TOP1sitemap.randomEM()
let info = IMsitemap.randomEM()



// Array.prototype.ggLINK = function (){
//   return this[axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + this)).then(token => { return token.data.data.url } )]
// }



const word = ['เว็บพนันบอล', 'เว็บ แทงบอล', 'เว็บ แทงบอลออนไลน์', 'ทางเข้าแทงบอล ', 'เว็บพนันบอล ออนไลน์', 'แทงบอล คาสิโน', 'หาเว็บแทงบอล ', 'แทงบอล ออนไลน์ 888', 'พนันบอล 888', 'แทงบอล 888', 'แทงบอลออนไลน์', 'พนันบอลออนไลน์ ', 'เว็บ พนัน บอล', 'เว็บพนันบอล คาสิโนบาคาร่า', 'สมัครแทงบอล', 'พนัน บอล ออนไลน์', 'สมัครแทง บอลออนไลน์', ' รับแทงบอลออนไลน์', ' เว็บไซต์ แทงบอล ออนไลน์', 'แทง บอล กับ ', 'เว็บ พนันแทงบอล', 'เว็บ แทง บอล', 'เว็บแทงบอล', ' เว็บแทงบอลออนไลน์', 'เว็บ 888 พนัน บอล ออนไลน์', 'เว็บ ฟุตบอล ออนไลน์', 'พนัน ฟุตบอล ออนไลน์',
'สมัคร แทง บอล', 'แทงบอล 888', 'แทงบอล ผ่านเว็บ ', 'แทงบอล888', ' แทงบอล ไม่อั้น', ' คืนยอดเสียทุกเดือน', 'เว็บไซต์ พนัน บอล', ' แทงบอล ให้เครดิต', 'แทงบอล สด ', 'เว็บ 888', 'เว็บแทง บอล ', 'เดิมพัน บอล ออนไลน์', 'เว็ปแทงบอล ', 'เล่น พนัน บอล ออนไลน์', 'เว็บ แทงบอลออนไลน์', 'เว็บ พนัน ฟุตบอล', 'แทงบอล ให้คุ้มค่า', 'แทงบอล ฝากถอนไว', ' สมัครแทงบอลออนไลน์', ' เว็บพนันบอล สมัคร แทงบอลออนไลน์', 'แทงบอล ', ' สมัคร แทงบอลออนไลน์', 'แทงบอล ufapro เว็บพนันบอล เว็บตรง', 'ufapro สมัครเว็บบอลออนไลน์', 'แทงบอล กับเว็บหลัก', 'เว็บแทง บอล888', 'เว็บ พนัน 888',
 'เว็บพนันบอล 888', 'แทงบอลผ่านเว็บ', 'เว็บไซต์ แทงบอลออนไลน์', 'เว็บไซต์ แทงบอลออนไลน์', 'สมัครเว็บแท่งบอล ', 'เว็บ เล่นบอล', 'แทงบอล สมัครวันนี้ฟรีเครดิต', 'สมัคร แทง บอล ออนไลน์', 'ufabet บาคาร่า ', 'เว็บ แทงบอลยูโร', 'เว็บ บอล888', 'แทงบอล รูปแบบใหม่', 'พนันบอล ออนไลน์', 'เว็บแทงบอล แนะนํา', 'แทงบอล ดียังไง'
]
//const word = ['เว็บพนันบอล888', 'แทงบอลผ่านเว็บ','แทงบอล888']

const BITLY = 'https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=https://ufapro888s.info/'
const BASE_URL = 'https://www.scorebat.com/video-api/v1/';
const DataItemList = []
const DataItemTM = []


const getFullItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const Items = response.data;
    Items.forEach(element => {

      const templateMD = {
        urlmake: element.title.replace(/\s/gm, ''),
        title: element.title,
        date: element.date.split('T')[0],
        description: element.competition,
        image: element.thumbnail,
        op1: element.side1,
        op2: element.side2,
        videos: element.videos[0]['embed']
      }

      //console.log(templateMD);
      //const Lx = IMsitemap.ggLINK();

      let colorBOX = ['silver', 'red', 'fuchsia', 'lime', 'yellow', 'blue', 'aqua']

      //let urlGGs = "http://www.google.com/search?q=ไฮไลท์ฟุตบอล+"+ element.title.replace(/\s/gm,"").replace(/-/g,"+") +"+UFAPRO888S&oq=ไฮไลท์ฟุตบอล+"+ element.title.replace(/\s/gm,"").replace(/-/g,"+") +"+UFAPRO888S&lr=lang_th&num=100&sourceid=chrome&ie=UTF-8"
      //let urlBYGG = axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + urlGGs)).then(token => { return token.data.data.url } )
      //   function ddLINK(urls){
      //  let liDATA;
      //  return llinks = axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + urls))
      //       .then(response => {
      //         //liDATA.push(response.data.data.url)
      //         liDATA = response.data.data.url;
      //       })
      //       .catch(error => {
      //         console.log(error);
      //       });
      //     //console.log(liDATA);
      //     // return llinks;
      //     }
      // let backlinkBY =  Lx

      var fullDATAMD = json2md([{
          h5: "ไฮไลท์ฟุตบอล " + element.competition.name
        },
        {
          p: "วันที่ " + element.date.split('T')[0]
        },
        {
          h1: element.title
        },
        {
          p: templateMD.videos
        },
        // {
        //   p: '<a href="'+IMsitemap.randomEM()+'">'+word.randomEM() + 'ทางเข้าหลัก UFABET ไฮไลท์ฟุตบอลคู่ ' + element.title +'</a>'
        // },
        // {
        //  p: '<a href="http://www.google.com/search?q=ไฮไลท์ฟุตบอล+' + element.title.replace(/\s/gm,"").replace(/-/g,"+") +'+UFAPRO888S&oq=ไฮไลท์ฟุตบอล+'+ element.title.replace(/\s/gm,"").replace(/-/g,"+") +'+UFAPRO888S&lr=lang_th&num=100&sourceid=chrome&ie=UTF-8">ค้นหา ข้อมูลเพิ่มเติม จาก GOOGLE '+ element.title +' จากเว็บ UFAPRO888S</a>'
        // },
        {
          p: '<a href="'+GooGle.randomEM().replace("url?q=","")+"url?sa=t&url="+IMsitemap.randomEM()+'">'+word.randomEM() + element.title +'</a>'
        }
      ]);
      //DataItemList.push(fullDATAMD.replace(/,/gim, ''))
      const HtemplateMD = '---\ntitle: ' + templateMD.title + '\ndate: "' + templateMD.date + '"\nauthor: UFAX\ndescription: "' + templateMD.description.name + " " + templateMD.title + " " + templateMD.date + '"\ntags: ["' + templateMD.op1.name + '","' + templateMD.op2.name + '"]\ncover:\n  image: ' + templateMD.image + '\n  alt: ' + templateMD.title + '\n  caption: ' + templateMD.title + '\n---\n\n' + templateMD.op1.name + " VS " + templateMD.op2.name + '\n\n<!--more-->\n\n'

      fs.writeFile(`./content/ไฮไลท์ฟุตบอล/${templateMD.urlmake}.md`, HtemplateMD + fullDATAMD, (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('wrote to file successfully')
        //sitesubmit(siteURL)
      })

      //return DataItem;
    });
  } catch (errors) {
    console.error(errors);
  }
};

const getYT = async (key) => {
  try {
    const response = await axios.get(encodeURI(ggyoutube+key));
    const Items = response.data;
    //console.log(Items)
    let temMD = []
    Items.forEach(element => {
      let wordbl = word.randomEM().replace(/\s/g, '')
      //console.log(element)
      const templateMD = {
        urlmake: element.id + wordbl,
        title: wordbl+' '+element.title,
       
        description: wordbl + element.description || wordbl + '',
        image: element.thumbnails || '',
        videos: '{{< youtube '+element.id +' >}}'
      }
      var fullDATAMD = json2md([{
        h5: "ไฮไลท์ฟุตบอล " + templateMD.title
      },
      {
        p: "วันที่ " + today
      },
      {
        h1: element.title
      },
      {
        p: templateMD.videos
      },
      {
        p: '<a href="' + IMsitemap.randomEM() + '">' + wordbl +'</a>'
      }
    ]);
      console.log(fullDATAMD)
    });

  //console.log(temMD)
  } catch (errors) {
    console.error(errors);
  }
};


//getYT('บอลเมื่อคืนนี้')

const test = async () => {
  try {
    let ss = []
    let SItR1 = []
    let SItR2 = []

    const axiosrequest1 = axios.get(baseSPORT);
    const axiosrequest2 = axios.get(BASE_URL);
    const axiosrequest3 = axios.get(encodeURI(BITLY));
    await axios.all([axiosrequest1, axiosrequest2,axiosrequest3]).then(axios.spread(function (res1, res2,res3) {
      ss.push([res1, res2,res3])
    }));
    const ItemsR1 = ss[0][0].data;
    const ItemsR2 = ss[0][1].data;
    const ItemsURL3 = ss[0][2].data;
    const ItR1 = ItemsR1['articles'];
    const ItR2 = ItemsR2;
    const URLBI = ItemsURL3.data.url;
    //console.log(URLBI);
    
    ItR1.forEach(res2 => {
      //console.log(res2);
      let wordbl = word.randomEM().replace(/\s/g, '')
      const RESMD1 = {
        urlmake: wordbl + res2.title.split(' ')[0].replace(/\s/gm, '').replace(/\'/gm, '').replace(/\"/gm, '').replace(/\-/gm, '').replace(/!/gm, '').replace(/\(|\)/gm, '').replace(/\./gm, ''),
        title: wordbl + ' ' + res2.title.replace(/\:/gm, '').replace(/\'/gm, '').replace(/"/gm, '').replace(/\-/gm, '').replace(/!/gm, '').replace(/\(|\)/gm, '').replace(/\./gm, ''),
        date: res2.publishedAt.split('T')[0] || '',
        description: wordbl + ' ' + res2.description,

        image: res2.urlToImage,
        content: res2.content + '\n' + res2.title + ' ' + wordbl + ' ' + res2.publishedAt.split('T')[0] || wordbl + '' + res2.content,
      }
      SItR1.push(RESMD1)
    })
    ItR2.forEach(element => {
      const RESMD2 = {
        title: element.title,
        //date: element.date.split('T')[0],
        description: element.competition,
        image: element.thumbnail,
        op1: element.side1,
        op2: element.side2,
        videos: element.videos[0]['embed']
      }
      //console.log(RESMD2);
      SItR2.push(RESMD2)
    })

    for (let i = 0; i < SItR1.length; i++) {
      for (let x = 0; x < SItR2.length; x++) {
        const HEADER = '---\ntitle: ' + SItR1[i].title + '\ndate: ' + SItR1[i].date + '\nauthor: UFAX\ndescription: ' + SItR1[i].title + " " + SItR1[i].date + '\ntags: ["' + SItR2[x].op1.name + '","' + SItR2[x].op2.name + '"]\ncover:\n  image: ' + SItR1[i].image + '\n  alt: ' + SItR1[i].title + '\n  caption: ' + SItR1[i].title + '\nlinks:\n  - posts/sport/\nreferences:\n  - name: "google"\n    link: "https://google.com"\n' +'\n---\n\n' + SItR1[i].title +"ไฮไลท์ฟุตบอล " + SItR2[x].op1.name + " VS " + SItR2[x].op2.name +'\n\n<!--more-->\n\n'
        const mdTEXT = json2md([{
            h5: SItR1[i].title
          },
          {
            p: "เมื่อวันที่ " + SItR1[i].date + ' ' + SItR2[i].title + ' ' + SItR2[x].op1.name + " VS " + SItR2[x].op2.name
          },
          {
            img: {
              title: SItR1[i].urlmake,
              source: SItR1[i].image,
              alt: SItR1[i].urlmake
            }
          },
          {
            p: SItR1[i].description + ' ' + '<a href="https://bit.ly/3ovjgXC">แทงบอล888</a>' +SItR2[i].title
          },
          {
            img: {
              title: SItR2[i].title,
              source: SItR2[i].image,
              alt: SItR2[i].title
            }
          },
          {
            p: SItR2[i].videos
          }
        ])
        //console.log(URLBI)
        //console.log([mdTEXT]);
        fs.writeFile(`./exampleSite/content/posts/sport/${SItR1[i].urlmake}.md`, HEADER + mdTEXT, (err) => {
          if (err) {
            console.error(err)
            return
          }
         // console.log('wrote to file successfully')
          //sitesubmit(siteURL)
        })
      }
    }

    //})
  } catch (errors) {
    console.error(errors);
  }
};

test()










//siteLINKbitly(siteBURL)
//getFullItems()
// axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=" + apiKey + "&longUrl=" + ufaxlink)).then((result) => {
//   // ได้งานมาในตัวแปร result
//   console.log(result)
// })
// //getFullItems()
// let bily = axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=" + apiKey + "&longUrl=" + ufaxlink));
// // อยากได้งานนาย B
// // bily.then((result) => {
// //   // ได้งานมาในตัวแปร result
// //   console.log(result)
// // })



//  async function GenLinkbitly(Gurl) {
//   const linkss = await axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + Gurl))
//   //console.log(linkss)
//    return linkss.data;
// }

// //let urlGGs = "http://www.google.com/search?q=ไฮไลท์ฟุตบอล+"+ element.title.replace(/\s/gm,"").replace(/-/g,"+") +"+UFAPRO888S&oq=ไฮไลท์ฟุตบอล+"+ element.title.replace(/\s/gm,"").replace(/-/g,"+") +"+UFAPRO888S&lr=lang_th&num=100&sourceid=chrome&ie=UTF-8"
// //let urlBYGG = getSSLINK(urlGGs)

// let urlGEN = "https://ufapro888s.info/posts/girl/แพ้สาวเสื้อขาวจริงจริ้ง/"

// //const getFullItems = async () => {
// //const backlink =  await GenLinkbitly(urlGEN).then(res => res.json());
// //console.log(backlink)






// let Linkbitly = function(Gurl) {
//   return axios.get(encodeURI("https://api-ssl.bitly.com/v3/shorten?access_token=23c47f073826eb0cdc1c2abedbb006976e0e0549&longUrl=" + Gurl)).then(token => { return token.data.data.url } )
// }

// let backlink = Linkbitly(urlGEN)
// //console.log(backlink) // Promise { <pending> }

// let llggby = backlink.then(function(result) {
//    console.log(result) // "Some User token"
// })
// console.log(llggby)
//   //console.log(result) // "Some User token"


//}
// const x = await someAsyncFn().then(() => doSomeLogging());

// let urlGEN = "https://ufapro888s.info/posts/girl/แพ้สาวเสื้อขาวจริงจริ้ง/"

// async function SHbily(urlGEN){
//   let a = Gbily(urlGEN);
//   console.log(a);
// }


//SHbily(urlGEN)
const p = console.log
const fs = require('fs')
const util = require('util')
const path = require('path')
global.appRoot = path.resolve(__dirname)
const env = appRoot+'/env'
const data = env+'/datas'

const readFile = util.promisify(fs.readFile)

function getFile(f) {
  return readFile(f, "utf8");
}


const main = async ()=>{
  p('hello world')
  p(data+'/test_text.txt')
  await getFile(data+'/test_text.txt').then(e=>{
  }).catch(e=>{
    console.error(e);
  })

  // p(e)
  // e.match(new RegExp(/^\p{L}+$/u))
  // var lol = 'lol'
  // let res
  // try {
  //   let cd = /[A-Z]/g;
  //   res = lol.match(cd)
  //   p(res)
  // } catch (error) {
  //   console.error(error);
  // }
  // p(res)
  // p('lol'.match(new RegExp(/^\p{L}+$/u)))

  // var paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  // // p(paragraph.match(/[a-z]/u))
  // p(paragraph.match(/^[a-zA-Z]/))
  // // p(paragraph.match(/[a-z]/g))

  var myRe = /d(b+)d/g;
  var myArray = myRe.exec('cdbbdbsbz');
  p(myArray)
  p(typeof myRe)
}

main()
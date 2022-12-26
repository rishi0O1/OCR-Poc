import { Injectable } from '@nestjs/common';

import { readFile, writeFile } from 'fs/promises';
import * as pdf from 'pdf-parse';

@Injectable()
export class AppService {
  async onModuleInit() {
    let dataBuffer = await readFile('src/Sample Test Summary.pdf');

    pdf(dataBuffer).then(function (data) {
      writeFile('src/foo.txt', data.text);
      // number of pages
      // console.log(data.numpages);
      // number of rendered pages
      // console.log(data.numrender);
      // PDF info
      // console.log(data.info);
      // PDF metadata
      // console.log(data.metadata);
      // PDF.js version
      // check https://mozilla.github.io/pdf.js/getting_started/
      // console.log(data.version);
      // PDF text
    });
  }
}

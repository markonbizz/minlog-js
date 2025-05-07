import * as format from './format'
import * as file from './file'
import * as style from './style'


function minlog(log: format.LogData): void {
    const data: string = format.format(log);
    console.log(data);
    if (file.isAllowToWriteFile()) {
        file.writeToFile("", data);
    }
}

export {
    minlog,
    format,
    file,
    style
};

export default {
    minlog,
    format,
    file,
    style
};
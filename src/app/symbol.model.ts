import { Word } from './word.model';

export class IPASymbol {
    constructor(
        public character: string,
        public sound: string,
        public examples: Word[] 
    ){};
}
export class Plan {
    
    constructor(public planName:string, 
        public planPoint: number,
        public planDescription: string,
        public planStartDate: Date,
        public planEndDate:Date
        ){}
}
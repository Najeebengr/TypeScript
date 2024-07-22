abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 8;
    }
}

// const najeebR = new TakePhoto("test", "test")

class Instagramm extends TakePhoto{
constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
){
    super(cameraMode, filter)
}
getSepia(): void {
    console.log("Sepia");
    
}
}

const nr = new Instagramm("test", "test", 3);
nr.getReelTime()
import { ListJobPostsImage } from "./list_jobpost_image";

export class ListJobpost{
    
    title!:string;
    companyName!:string;
    description!:string;
    createdDate!:Date;
    updatedDate!:Date;
    jobPostImageFiles?: ListJobPostsImage[];
    imagePath: string;

}
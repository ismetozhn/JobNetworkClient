import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/contracts/base-url';
import { ListJobpost } from 'src/app/contracts/list_jobpost';
import { FileService } from 'src/app/services/common/models/file.service';
import { JobpostsService } from 'src/app/services/common/models/jobposts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private jobPostsService: JobpostsService, private activatedRoute: ActivatedRoute, private fileService: FileService) { }

  currentPageNo: number;
  totalJobPostCount: number;
  totalPageCount: number;
  pageSize: number = 12;
  pageList: number[] = [];
  baseUrl: BaseUrl;

  jobposts: ListJobpost[];
  async ngOnInit() {

    this.baseUrl = await this.fileService.getBaseStorageUrl();

    this.activatedRoute.params.subscribe(async params => {
      this.currentPageNo = parseInt(params["pageNo"] ?? 1);

      const data: { totalJobPostCount: number, jobPosts: ListJobpost[] } = await this.jobPostsService.read(this.currentPageNo - 1, this.pageSize,
        () => {

        },
        errorMessage => {

        });

      this.jobposts = data.jobPosts;

      this.jobposts = this.jobposts.map<ListJobpost>(p => {
        const listProduct: ListJobpost = {
          title: p.title,
          createdDate: p.createdDate,
          updatedDate: p.updatedDate,
          imagePath: p.jobPostImageFiles.length ? p.jobPostImageFiles.find(p => p.showcase)?.path : "default-path",

          description: p.description,
          companyName: p.companyName,
          jobPostImageFiles: p.jobPostImageFiles
        };

        return listProduct;
      });

      this.totalJobPostCount = data.totalJobPostCount;
      this.totalPageCount = Math.ceil(this.totalJobPostCount / this.pageSize);

      this.pageList = [];

      if (this.currentPageNo - 3 <= 0)
        for (let i = 1; i <= 7; i++)
          this.pageList.push(i);

      else if (this.currentPageNo + 3 >= this.totalPageCount)
        for (let i = this.totalPageCount - 6; i <= this.totalPageCount; i++)
          this.pageList.push(i);

      else
        for (let i = this.currentPageNo - 3; i <= this.currentPageNo + 3; i++)
          this.pageList.push(i);
    });

  }

}
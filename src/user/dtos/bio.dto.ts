import { Bio } from "../models/bio.entity";

export class BioDto {
  jobTitle: string;
  jobSalary: number;
  birthday: string;
  avatarUrl: string;

  static fromBio(bio: Bio) {
    const dto = new BioDto();
    dto.jobTitle = bio.job.title;
    dto.jobSalary = bio.job.salary;
    dto.birthday = bio.birthday.toDateString();
    dto.avatarUrl = bio.avatarUrl;

    return dto;
  }
}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  collection: "cats",
  timestamps: true
}

@Schema(options)
export class Cat extends Document {
  @ApiProperty({
    example: 'coco@kakao.com',
    description: 'email',
    required:true
  })  
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  

  @ApiProperty({
    example: 'coco',
    description: 'name',
    required:true
  })  
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1111',
    description: 'password',
    required:true
  })  
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({
    default: 'https://velog.velcdn.com/images/funco247/post/ca27d9f2-8b9f-46dd-bf8a-98612fd8e330/image.png'
  })
  @IsString()
  imgUrl: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    imgUrl: string;
  }
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    imgUrl: this.imgUrl
  }
})
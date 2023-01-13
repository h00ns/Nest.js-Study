import { ApiProperty, PickType } from "@nestjs/swagger";
import { Cat } from "../cats.schema";

// email, name만 가져옴
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) { 
  @ApiProperty({
    example: '050211191002',
    description: 'id',
  })
  id: string;
}
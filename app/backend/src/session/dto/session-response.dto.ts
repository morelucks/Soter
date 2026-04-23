import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  SessionType,
  VerificationSessionStatus,
  SessionStepStatus,
} from '@prisma/client';

export class SessionStepResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  stepName: string;

  @ApiProperty()
  stepOrder: number;

  @ApiProperty({ enum: SessionStepStatus })
  status: SessionStepStatus;

  @ApiPropertyOptional()
  input?: Record<string, any>;

  @ApiPropertyOptional()
  output?: Record<string, any>;

  @ApiPropertyOptional()
  error?: string;

  @ApiProperty()
  attempts: number;

  @ApiProperty()
  maxAttempts: number;

  @ApiPropertyOptional()
  startedAt?: Date;

  @ApiPropertyOptional()
  completedAt?: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class SessionResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ enum: SessionType })
  type: SessionType;

  @ApiProperty({ enum: VerificationSessionStatus })
  status: VerificationSessionStatus;

  @ApiPropertyOptional()
  contextId?: string;

  @ApiPropertyOptional()
  metadata?: Record<string, any>;

  @ApiPropertyOptional()
  expiresAt?: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiPropertyOptional()
  completedAt?: Date;

  @ApiPropertyOptional()
  failedAt?: Date;

  @ApiPropertyOptional({ type: [SessionStepResponseDto] })
  steps?: SessionStepResponseDto[];

  @ApiPropertyOptional()
  currentStep?: SessionStepResponseDto;

  @ApiPropertyOptional()
  nextStep?: SessionStepResponseDto;
}

export class SubmissionResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  sessionId: string;

  @ApiPropertyOptional()
  stepId?: string;

  @ApiProperty()
  submissionKey: string;

  @ApiProperty()
  payload: Record<string, any>;

  @ApiPropertyOptional()
  response?: Record<string, any>;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  isIdempotent: boolean;
}

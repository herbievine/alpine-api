import { Field, ObjectType } from 'type-graphql'
import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ManyToOne
} from 'typeorm'
import { Folder } from './Folder'

@ObjectType()
@Entity()
export class File extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Field(() => String)
    @CreateDateColumn({ type: 'date' })
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn({ type: 'date' })
    updatedAt: Date

    @Field()
    @Column()
    title!: string

    @Field()
    @Column()
    text: string

    @Field()
    @Column()
    folderId: string

    @ManyToOne(() => Folder, (folder) => folder.files, { onDelete: 'CASCADE' })
    folder: Folder
}

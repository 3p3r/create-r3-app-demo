import { Entity, Fields } from "remult"

@Entity("blogs", {
    allowApiCrud: true
})

export class Blog {
    @Fields.id()
    id = ""

    @Fields.string()
    title = ""

    @Fields.string()
    content = ""

    @Fields.string()
    status = ""

    @Fields.createdAt()
    createdAt = new Date()
}
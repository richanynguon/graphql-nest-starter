import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class MessagesResolver {
  messagesThatReallyShouldBeInADB = [
    { id: 0, description: 'The seed message' },
    { id: 1, description: 'another one' },
  ]

  @Query('messages')
  getMessages() {
    return this.messagesThatReallyShouldBeInADB;
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    const id = this.messagesThatReallyShouldBeInADB.length;
    const newMessage = { id, description };
    this.messagesThatReallyShouldBeInADB.push(newMessage);
    return newMessage;
  }

}


function postedBy(parent, args, context) {
	return context.prisma.meme({id: parent.id}).postedBy();
}

module.exports = {
	postedBy
};

//this is resolving any nested query between users and memes.
//This is the solution to the null null null error. I think...
//because it connects all the pieces in a many to one or many
//to many relationship... which, maintains database truthfulness
//Without this piece GRAPH ql is hardly a Graph.

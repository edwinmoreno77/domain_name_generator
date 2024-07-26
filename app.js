function domainNameGenerator() {
    const pronouns = ['the', 'our'];
    const adjectives = ['great', 'big', 'super'];
    const nouns = ['jogger', 'racoon'];
    const extensions = ['.com', '.us', '.cl', '.org'];

    for (let adj of adjectives) {
        for (let extension of extensions) {
            for (let pronoun of pronouns) {
                for (let noun of nouns) {
                    console.log(pronoun + adj + noun + extension);
                }
            }
        }
    }
}

domainNameGenerator();
---
layout: post
title:  Using a thoughtful workflow to support collaboration on text transcriptions
date:   2015-04-20
permalink: using-a-thoughtful-workflow-to-support-collaboration-on-text-transcriptions/
---

Working at the source code level opens up several new collaboration possibilities. Most importantly is the opportunity to use GIT and to leverage existing GIT workflows.

Three excellent descriptions of possible workflows are available here.

* [https://www.atlassian.com/git/tutorials/comparing-workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
* [https://blog.udemy.com/git-tutorial-a-comprehensive-guide/](https://blog.udemy.com/git-tutorial-a-comprehensive-guide/)
* [http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model/)

In this post, I want to explain how we can use GIT to facilitate controlled collaboration when working on an edition of a text.

Here I describe how I use GIT to allow undergraduate collaboration on manuscript transcriptions that can be integrated into on-going editions.

For any "item" in the Sentences Commentary Text Archive (SCTA, [http://scta.info](http://scta.info)), there is a corresponding official git repository for that "item" with write permissions restricted to administrators, gatekeepers, and officially sanctioned editors. An "item" in the SCTA is typically a specific question or lecture within a given Sentences Commentary.

In concord with workflows used successfully in the software community, anyone can "fork" the official repository into their own account. (See: [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow))

In practice, when my students want to begin a transcription, they "fork" an official repository into their own "bitbucket" or "github" account and then "clone" this repository to their own computer. Once "forked" and "cloned" they can begin their work.

Ideally, they should be easily able to find the manuscript witness and the folios of that witness corresponding to that item using the Sentences commentary image viewer: [http://images.scta.info](http://images.scta.info)

Students can then transcribe and edit their text, making "commits" and "pushing" to their own "cloud repositories" whenever they wish. Once they think they've completed a transcription or taken the text as far as they think they are able, the can submit a "pull request" (as described here: [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)). The "pull request" then triggers a "review" by gatekeepers of the the official repositories. The bitbuket.org UI allows a place for discussion and review of the submitted text. A gate keeper or editor can make requests for further editing before accepting the "pull request" and "merging" it into the official repository. This workflow not only offers an opportunity for transcription review, but helps document changes made to the text as well as the reasons for these changes. Once the "gatekeeper" decides the submitted changes genuinely improve the text, he or she can accept the request and "merge" it into the official repository.

Once merged into the official repository, the contributions of undergraduates and novices can be used and leveraged by a number of existing services. The metadata embedded in the text can be re-indexed into the Sentences Commentary Text Archive ([http://scta.info](http://scta.info)). Its status will be updated and visible in the Sentences commentary text viewer ([http://texts.scta.info/index](http://texts.scta.info/index)), annotations will be available in the image viewer ([http://images.scta.info](http://images.scta.info)), and if there is a site that has been created for the entire commentary (e.g. [http://plaoulcommentary.lombardpress.org](http://plaoulcommentary.lombardpress.org)) the most recent version of the text will formatted for reading.

I have have three undergraduate students now working on Sentences commentary transcriptions in this manner. When they submit their pull requests and they have been accepted into the official repository, I will post links to them below. Stay tuned.
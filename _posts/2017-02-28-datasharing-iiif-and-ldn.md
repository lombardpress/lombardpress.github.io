---
layout: post
title:  IIIF and Linked Data Notifications - Thoughts and Reflections
date:   2017-02-28
comments: true
description: A write up of ongoing reflections about how to use Linked Data Notifications to help facilitate data sharing between related IIIF resources.
---

A post by Jeffrey Witt (@jeffreycwitt)

# Introduction

In the following, I offer some reflections on how the [IIIF community](http://iiif.io) could use the emerging [Linked Data Notification](https://www.w3.org/TR/ldn/) specification to facilitate the sharing of IIIF resources between research groups and libraries. This post is a sequel and companion to [my earlier description](http://lombardpress.org/2016/04/16/iiif-webmentions/) of how Rafael Schwemmer (of text & bytes and e-codices) and I used the [Webmention](https://www.w3.org/TR/webmention/) specification to achieve similar results. See also my related post on using [linked data notifications to share discussions between connected resources](http://lombardpress.org/2017/01/24/linking-research/).

Caveat: none of the following has the approval or authority of the IIIF community; it is entirely speculative and experimental, designed primarily to move the discussion forward.

The main outcomes desired are as follows: First, we would like to create an automated way of allowing content providers to “announce” the publication of IIIF content (usually “supplemental”, i.e. a non-manifest resource) that has some kind of relationship or relevance to other IIIF content (usually, a manifest), particularly in cases where these relationships are not made explicit within the resource itself. Second, we want to create a standard serialization of these “announcements” and “content publication” so that users of this content can develop automatic workflows of incorporating this related data into their systems.

# General Use Cases:

To understand the motivation behind these goals, it is helpful to look at a few emerging use cases.

The [SCTA](http://scta.info) publishes a large number of IIIF ranges, transcription layers, and search services as separate stand-alone IIIF resources that relate to manifests, canvases, and images published and maintained by several independent libraries.

The [Princeton Geniza Lab](https://www.princeton.edu/~geniza/) similarly maintains a database of transcriptions of Hebrew manuscripts scattered in more than 70 libraries.

The SCTA and Geniza Lab, despite being different projects with different datasets, should be able to adopt one common solution of announcing and publishing their “supplemental” data that can be understood and consumed by a plurality of libraries.

Moreover, the SCTA and Geniza Lab both, independently, have “supplemental” (non-manifest) data relevant to artifacts in the same libraries. For example, both independent research groups have “supplemental” data about manuscripts at the University of Pennsylvania and Cambridge.

The University of Pennsylvania and Cambridge should be able to receive, ingest, and use information from both research groups with one common workflow. In other words, they should not be developing one mechanism to include information from the SCTA and a second workflow to ingest information from the Princeton Geniza Project.

Again, the SCTA has transcriptions and complicated ranges for manuscripts in the Harvard University collection. As Harvard thinks about building a IIIF workspace in which scholars can work, it would be nice if the workspace could automatically alert the user to available transcriptions, ranges, or services related to the canvas currently in focus. In an ideal world, Harvard would not even need to modify its original manifest, but the workspace could simply offer an “alert” to the user. The user could then decide to bring in the “foreign” content if they wanted to.

Ideally, we would like to achieve something like the following:

![ldn-visualization](/assets/images/ldn-visualizations.png)

Or

![ldn-visualization](/assets/images/ldn-visualizations1.png)

# New attempts with Linked Data Notifications

In an [earlier post](http://lombardpress.org/2016/04/16/iiif-webmentions/), we described trying to facilitate this data sharing via [Webmentions](https://www.w3.org/TR/webmention/). Here we consider what this might look like using [Linked Data Notifications](https://www.w3.org/TR/ldn/). Some previous discussion of the topic can be found on the IIIF-discuss board [here](https://groups.google.com/forum/#!topic/iiif-discuss/DMGdfHcfH8o).


## Example Notifications

### Example 1

Layer Notification: [http://scta.info/iiif/rothwellcommentary/wettf15/notification/layer/transcription](http://scta.info/iiif/rothwellcommentary/wettf15/notification/layer/transcription)

Compare to the earlier Webmention Layer Supplement: [http://scta.info/iiif/rothwellcommentary/wettf15/supplement/layer/transcription](http://scta.info/iiif/rothwellcommentary/wettf15/supplement/layer/transcription)

This is what I see as the simplest and perhaps IDEAL case. It is the announcement of an available layer related to an e-codices manifest. The wrapper is very simple. There is an "id" for the sender's notification, a "source" to indicate the domain from which the announcement comes, a "target" (i.e. the manifest to which the announced material is related), and then the "object". The object in this case is just the URL ID to the “supplemental” non-manifest layer that can be de-referenced independent of the notification or manifest.

### Example 2

Service Notification: [http://scta.info/iiif/rothwellcommentary/wettf15/notification/service/searchwithin](http://scta.info/iiif/rothwellcommentary/wettf15/notification/service/searchwithin)

Compare to the earlier Webmention Service Supplement: [http://scta.info/iiif/rothwellcommentary/wettf15/supplement/service/searchwithin](http://scta.info/iiif/rothwellcommentary/wettf15/supplement/service/searchwithin)

This example is fairly similar except that the object does not point to a de-referencable link, but provides the json object itself. There are no examples of a `@type: "service"` in the IIIF search API, but I added it here because I am expecting that the client would be using the `@type` property to know what kind of information is being announced and what to do with it. (This does, however, compete with an example in the IIIF documentation where the value of "type" in the service block was "feature." See [http://iiif.io/api/annex/services/#geojson](http://iiif.io/api/annex/services/#geojson). Something else besides "type" could be used. However, on this approach, it would have to be the same property on all announced objects.

Once the client knows that it is a "service" and not a "layer" or "range" it can check the service "profile" to know what kind service it is and whether or not they want to incorporate it.

### Example 3

Service Notification: [http://scta.info/iiif/rothwellcommentary/wettf15/notification/ranges/toc](http://scta.info/iiif/rothwellcommentary/wettf15/supplement/ranges/toc)

Compare to the earlier Webmention Service Supplement: [http://scta.info/iiif/rothwellcommentary/wettf15/supplement/ranges/toc](http://scta.info/iiif/rothwellcommentary/wettf15/supplement/ranges/toc)

Here is a range announcement. The "object" property is taking a single object that then wraps a flat list of all other connected ranges being announced. The `@type` can be used to recognize this as a range. The viewing hint is set to "wrapper" to alert the client that this is a wrapper and should be discarded. Using a "wrapper" range like this also allows me to create a de-referencable id for the entire set of ranges (e.g. [http://scta.info/iiif/rothwellcommentary/wettf15/ranges/toc/wrapper](http://scta.info/iiif/rothwellcommentary/wettf15/ranges/toc/wrapper). Such a de-referencable collection of ranges would also allow me to just provide the link as the value of the "object" (as in the case of “example 1” above). Further, if I had several different ranges for this manifest, I could send them to e-codices all at once as an array of de-referencable links to range wrappers.

# Sending a Notification

Sending notification is a simple post request.

![bash_send_notification](/assets/images/bash_send_notification.png)

# The Inbox

“The Inbox” is a service described by the LDN spec, which accepts the POST request of any announcement from "senders" and offers a list of notifications for GET requests from "consumers".

On a generic GET request to the inbox endpoint, the inbox should return a list of received notifications.

![unfiltered_notifications](/assets/images/unfiltered_notifications.png)

On a GET request for a particular notification, the notification itself should be returned.

![single_notifications](/assets/images/single_notifications.png)

I have also modified this inbox, so a user/client could request a list of resources related to a particular manifest (or other resource).

![filtered_announcements](/assets/images/filtered_announcements.png)

Now, theoretically, UPenn, Harvard, or Cambridge, could just send a request to this inbox to see if there are any announcements about resources related to their own manifests.

In return they will receive a list of notifications that they can crawl. They can then, in turn, crawl the resources announced via these notifications and then incorporate them into their own systems however they see fit.


# Final Thoughts and Reflections

What role would notifications play if there was a IIIF directory/registry (built from crawlers and sitemaps) that listed all acknowledged IIIF resources (not just manifests, but independent services, ranges, layers, etc)?

In this world, notifications would seem to be of primary use for the notifications of “updates”.
But, if the content of my range list changes or improves, what actually needs to be updated? Presumably, a registry of resources would store just the link to the content I am publishing. In this case, if my content updates, the URL would remain the same, and and clients using this information, would automatically get the most up-to-date information. The only update then that seems necessary is the “announcement” of a new resource (a new URL) that the crawler did not capture the first time around.

However, at the present, the announcement wrapper seems to provide another **CRITICAL** service besides just the announcement of an update. The announcement wrapper is the **only way** (that I know of) to link, via the “target” property, a resource (for example a range list) with a foreign manifest on another system.
Normally, a manifest is responsible for containing all the links that "lead out" to all connected resources. But here, we are considering a case, where a manifest does not, ahead of time, know about these connected resources. Currently, the IIIF API does not provide a mechanism to discover manifests from related supplemental material. Therefore, we need a mechanism to "lead in" from external resources to a manifest. Currently, the announcement wrapper is performing this function.

Compare, for example, the two links below:

* A notification of a set of ranges
[http://scta.info/iiif/rothwellcommentary/wettf15/notification/ranges/toc](http://scta.info/iiif/rothwellcommentary/wettf15/notification/ranges/toc)
* And then the same set of ranges without the notification as external wrapper
[http://scta.info/iiif/rothwellcommentary/wettf15/ranges/toc/wrapper](http://scta.info/iiif/rothwellcommentary/wettf15/ranges/toc/wrapper)

In the latter case, the list of ranges includes no references to the manifest, but only links to the canvas IDs. So, how can a crawler, by itself, make the association between this set of ranges and a foreign manifest that includes identical canvases?

The notification wrapper gives us a way to connect resources, even if the manifest does not contain the necessary connecting links within itself.

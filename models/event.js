class Event {
  constructor(
    id,
    organizer,
    title,
    imageUrl,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    language,
    fee,
    description,
    targetAudience,
    regLink,
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.startDate = startDate;
    this.endDate = endDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.language = language;
    this.fee = fee;
    this.description = description;
    this.targetAudience = targetAudience;
    this.regLink = regLink;
  }
}

export default Event;

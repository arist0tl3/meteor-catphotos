Template.gallery.helpers({
  images: function(){
    return Images.find();
  },

  imagecount: function(){
    return TotalCount.findOne().count;
  }
});

Template.gallery.events({
  'click .submitclass' : function(e){
    e.preventDefault();
    imageToInsert = {};
    imageToInsert['source'] = $('#imagetext').val();
    imageToInsert['caption'] = $('#imagecaption').val();
    if(Images.find().count() > 14){
      imageToRemove = Images.findOne({}, {sort: {date_created: -1}});
      imageToRemoveId = imageToRemove._id;
      imageToRemove = {};
      imageToRemove['_id'] = imageToRemoveId;
      Images.remove(imageToRemove);
    }
    Images.insert(imageToInsert);
    Session.set("update", Session.get("update") + 1);
    $('#myContent').wookmark();
    $('#imagetext').val("");
    $('#imagecaption').val("");
    toUpdate = TotalCount.findOne()._id;
    TotalCount.update({_id: toUpdate}, { $inc : { count : 1}});


  }
});

Tracker.autorun(function () {
  $('#myContent').wookmark();
});

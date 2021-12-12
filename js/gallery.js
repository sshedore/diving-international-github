// A $( document ).ready() block.
$(document).ready(function () {
  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailHeight: "auto",
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailAlignment: "center",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    thumbnailOpenImage: true
  });
});

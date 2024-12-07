function handleFileClick(a,b) {
const fileLinks = {
"file.png": "https://github.com/SagiriHimoto",
};
switch (a) {
  case 'SillyTile':
    window.open('https://github.com/SagiriHimoto/SillyTileDisplay/blob/main/' + b, "_blank");
    break;
  default:
    const url = fileLinks[a] || "#";
	window.open(url, "_blank");
}
};
$(document).on("click", ".list-group-item", function(e) {
    const target = $(e.target).closest("[data-toggle='collapse']");
    if (target.length) {
        const collapseId = target.attr("data-target");
        $(collapseId).collapse("toggle");
        target.find('.fa-caret-right').toggleClass('rotated-icon');
        e.stopPropagation();
    }
});
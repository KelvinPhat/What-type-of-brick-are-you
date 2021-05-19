let q1;
let q2;
let counter = 0;

$(".q2a").change( function() {
    $(".ddddd").text($(".q2a").val());
});


$(".q1a").click(function() {
    console.log($('input:checked').val());
	if ( $('input:checked').val() === "1") {
        q1 = "Yes";
    }
    if ( $('input:checked').val() === "2") {
        q1 = "No";
    }
    $(".q1").hide();
    $(".q2").show();
    $(".myBar").css("width","50%");
});

$(".q2b").click(function() {
    $(".myBar").css("width","100%");
    $(".q2").hide();
    
    q2 = $(".q2a").val();

    
    //results
    $(".results").show();
    if(q1 === "Yes" && q2 < 6) {
        $(".r2").show();
    }
    if(q1 === "Yes" && q2 > 5) {
        $(".r4").show();
    }
    if(q1 === "No" && q2 < 6) {
        $(".r1").show();
    }
    if(q1 === "No" && q2 > 5) {
        $(".r3").show();
    }
    
    counter += 1;
    
    //
    $(".r5").text("Answers: " + q1 + " & " + q2);
    $(".r6").text("This quiz has been taken " + counter + " times");
    
    
});

$(".reset").click( function() {
    $(".q1").show();
    $(".results").hide();
    $(".myBar").css("width","0%");
});
// const NEWLINE_CODE = "%0D%0A";
const NEWLINE_CODE = "\n";
const line_url = 'line://oaMessage/@022vedjk/?';
$(document).ready(function() {
    $("#order").submit(function($e) {
        $e.preventDefault();
        const values = {};
        $("#order input:not([type='checkbox']), #order textarea").each(function() {
            values[this.name] = $(this).val();
        });
        const special_services = [];
        $("#order input[type='checkbox']").each(function() {
            if($(this).prop("checked") === true) {
                values[this.name] = true;
                special_services.push(this.name);
            } else {
                values[this.name] = false;
            }
        });
        // console.log(values);
        let text = println("??皇家團隊│車輛訂購單");
        text += println(`?????????`);
        text += println(`用車日期：${values["date"]}`);
        text += println(`用車時間：${values["time"]}`);
        text += println(`上車地點：${values["adressup"]}`);
        text += println(`下車地點：${values["adressdown"]}`);
        text += println(`乘車人數：${values["people"]}`);
        text += println(`行李件數：${values["package"]}`);
		text += println(`備註訊息：${values["msg"]}`);
        text += println(`???加購服務???`);
        text += println(special_service_to_text(special_services));
		text += println(`?????????`);
		text += println(`訂購人：${values["name"]}`);
		text += println(`訂購人電話：${values["phone"]}`);
        open(line_url+text);
    });
    var theme = "ios";
    var mode = "scroller";
    var display = "bottom";
    var lang="zh";
    // Select demo initialization
    $('#demo_select').mobiscroll().select({
        theme: theme,     // Specify theme like: theme: 'ios' or omit setting to use default
        mode: mode,       // Specify scroller mode like: mode: 'mixed' or omit setting to use default
        display: display, // Specify display mode like: display: 'bottom' or omit setting to use default
        lang: lang        // Specify language like: lang: 'pl' or omit setting to use default
    });
    
    // Date demo initialization
    $('#demo_date').mobiscroll().date({
        theme: theme,
        mode: mode,
        display: display,
        lang: lang
    });
    
    // Date & Time demo initialization
    $('#demo_datetime').mobiscroll().datetime({
        theme: theme,
        mode: mode,
        display: display,
        lang: lang,
        dateFormat:"yyyy-mm-dd",
        minDate: new Date(2015,1,1,12,00),
        maxDate: new Date(2025,1,1,12,00),
        stepMinute: 1
    });
    
    // Time demo initialization
    $('#demo_time').mobiscroll().time({
        theme: theme,
        mode: mode,
        display: display,
        lang: lang
    });
    // var send = document.getElementById('sends')
    // send.addEventListener('click', function(){
    //     window.location='line://oaMessage/@022vedjk/'+'?a|r';
    // })
    
    // var send = document.getElementById('sending')
    // send.addEventListener('click', function(){
    //     window.location='line://oaMessage/@022vedjk/'+'?a|r';
    // })
    
});
function open(path) {
    window.location= encodeURI(path);
}
function special_service_to_text(special_services) {
    const name2text = {
        baby: "嬰兒座椅0~1歲(+200)",
        baby2: "兒童座椅1~4歲(+150)",
        baby3: "增高座墊4~8歲(+100)",
        carry: "多點上下車(+100起)",
        driver: "舉牌服務(+100)",
    };
    return special_services.map(v => name2text[v]).join(NEWLINE_CODE);
}

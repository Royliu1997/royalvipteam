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
        let text = println("??�Ӯa�ζ��x�����q�ʳ�");
        text += println(`?????????`);
        text += println(`�Ψ�����G${values["date"]}`);
        text += println(`�Ψ��ɶ��G${values["time"]}`);
        text += println(`�W���a�I�G${values["adressup"]}`);
        text += println(`�U���a�I�G${values["adressdown"]}`);
        text += println(`�����H�ơG${values["people"]}`);
        text += println(`�����ơG${values["package"]}`);
		text += println(`�Ƶ��T���G${values["msg"]}`);
        text += println(`???�[�ʪA��???`);
        text += println(special_service_to_text(special_services));
		text += println(`?????????`);
		text += println(`�q�ʤH�G${values["name"]}`);
		text += println(`�q�ʤH�q�ܡG${values["phone"]}`);
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
        baby: "����y��0~1��(+200)",
        baby2: "�ൣ�y��1~4��(+150)",
        baby3: "�W���y��4~8��(+100)",
        carry: "�h�I�W�U��(+100�_)",
        driver: "�|�P�A��(+100)",
    };
    return special_services.map(v => name2text[v]).join(NEWLINE_CODE);
}

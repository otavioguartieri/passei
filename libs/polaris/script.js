var plss_nosafeattributes = ['style','tooltip-content', 'onclick', 'onmouseover', 'onmouseout'];

function plss() {

    /* Input type switch */
    plss_switch();

    /* Textarea type iconpreview */
    plss_textarea_iconpreview();

    /* Textarea type codepreview */
    plss_textarea_codepreview();

    /* Input type color */
    plss_input_color();
        
    /* Input type money */
    plss_input_money();

    /* Input type search */
    plss_input_search();

    /* Input type tel */
    plss_input_tel();

    /* Input type cpfcnpj */
    plss_input_cpfcnpj();

    /* Input type email */
    plss_input_email();

    /* Input type file */
    plss_input_file();

    /* Input type number */
    plss_input_number();

    /* Input type url */
    plss_input_url();

    /* Input type password */
    plss_input_password();
        
    /* Input type text */
    plss_input_text();

    /* Select3 */

    $('select3:not(.nopl)').find('.select3_content-values_input').find('option[selected]').not('.akxr').each(function(i){
        $(this).addClass(`akxr`);
        select3_add($(this).parent().parent().find('.select3_content-options'),$(this)[0].outerHTML,$(this).val(),$(this).html());
        select3_define($(this));
        $(this).parent().parent().addClass('hidden');
        $(this).remove();
    });

    $('select3:not(.nopl)').find('.select3_content-values_input').not('.select3-disabled').each(function(i){
        if($(this).attr('disabled')){
        $(this).addClass("select3-disabled");
        $(this).parent().parent().find('.cssplss_select3').attr('disabled',true);
        }
    });

    $('select3:not(.nopl)').find('.select3_content-values_input.select3-disabled').not(':disabled').each(function(i){
        if(!$(this).attr('disabled')){
        $(this).removeClass("select3-disabled");
        $(this).parent().parent().find('.cssplss_select3').attr('disabled',false);
        }
    });
        
    $('select3:not(.nopl)').not('.sakxr').each(function(i){
        $(this).addClass(`sakxr`);
        $(this).append(`
        <div>
            <input type="text" readonly onclick="go_options(this);" class="nopl cssplss_select3 boxflex cssplss_select3-close">
            <div class="select3_content hidden ">
            <input type="text" class="nopl select3_content-search" oninput="select3_search(this);" placeholder="Pesquisar...">
            <input type="hidden" class="select3_content-values_input">
            <div class="select3_content-options">
            </div>
            </div>
        </div>
        `);

        $(this).find('option').each(function(i){
        if($(this).attr('selected')){
            select3_add($(this).parent().find('.select3_content-options'),$(this)[0].outerHTML,$(this).val(),$(this).html());
            select3_define($(this).parent().find('.select3_content-options option'));
            $(this).parent().find('.select3_content').addClass('hidden');
            $(this).remove();
        }
        });

        if($(this).attr('multi')){
        $(this).addClass('select3_multi');
        $(this).find('.select3_content-options').addClass('select3_content-multi');
        }
        $(this).find('.cssplss_select3').attr('placeholder', $(this).attr("placeholder"));
        $(this).removeAttr('placeholder');

        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(attrs[i].name != 'class' && attrs[i].name != 'onclick' && attrs[i].name != 'multi' && attrs[i].name != 'style'){
                $(this).find('.select3_content-values_input').attr(attrs[i].name, $(this).attr(attrs[i].name));
                if(attrs[i].name == 'id'){
                var now = new Date().getTime().toString().slice(0,-3);
                $(this).find('.select3_content-options').attr(attrs[i].name, `${$(this).attr(attrs[i].name)}_${now}`);
                }
                $(this).removeAttr(attrs[i].name);
            }
            if(attrs[i].name == 'style'){
                $(this).find('.cssplss_select3 ').attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
            }
        }
    });

    $('button:not(.nopl), .btn:not(.nopl), .button:not(.nopl), .plss-button, .plss-btn, input[type="btn"]:not(.nopl), input[type="button"]:not(.nopl), input[type="submit"]:not(.nopl), input[type="reset"]:not(.nopl)').not('.plxoks').each(function(i){
        $(this).addClass('plxoks');
        $(this).css('--default', $(this).attr("bgcolor")).removeAttr('bgcolor');
        $(this).css('color', $(this).attr("color")).removeAttr('color');
    });

    $('input[btncolor]').each(function(i){
        $(this).attr('btncolor',$(this).attr('btncolor').replace(';',''));
        var color = $(this).attr('btncolor');
        if($(this).attr('type') == 'date' || $(this).attr('type') == 'time' || $(this).attr('type') == 'datetime-local' || $(this).attr('type') == 'month' || $(this).attr('type') == 'week'){
            if($(this).attr('btncolor').includes('var(--'))
                color = getComputedStyle(document.documentElement).getPropertyValue($(this).attr('btncolor').replace('var(--','--').replace(')',''));
            if($(this).attr('reference') && $(this).attr('reference').split('-')[0] == 'icon')
                $(this).css('--inputIconBackground',color);
            else
                $(this).css('--default',color);
        }else{
            if($(this).attr('reference') && $(this).attr('reference').split('-')[0] == 'icon')
                $(this).parent().css('--inputIconBackground',color);
            else
                $(this).parent().find('.plss-button, .plss-btn, input[type="btn"]:not(.nopl), input[type="button"]:not(.nopl), input[type="submit"]:not(.nopl), input[type="reset"]:not(.nopl)').css('background-color',color);
        }
            $(this).removeAttr('btncolor');
    });

    $('input[iconcolor]').each(function(i){
        $(this).attr('iconcolor',$(this).attr('iconcolor').replace(';',''));
        $(this).parent().find('.plss-button, .plss-btn, input[type="btn"]:not(.nopl), input[type="button"]:not(.nopl), input[type="submit"]:not(.nopl), input[type="reset"]:not(.nopl)').css('color',$(this).attr('iconcolor'));
        $(this).removeAttr('iconcolor');
    });

    /* pulse */
    plss_pulse();

    /* tooltip */
    plss_tooltip();

    /* dropdown */
    plss_dropdown();

    /* floating-action */
    plss_floating_action();

    /* loaders */
    plss_loaders();

    /* carousel */
    plss_carousel();
}

/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* -------------PAGE-MARK-WILL-BE-REMOVED!!!--------------------------PAGE-MARK-WILL-BE-REMOVED!!!------------- */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------------ */

/* pulse */

function plss_pulse(){
    $('*[pulse]').not('.okaw').each(function(i){
        $(this).addClass('okaw');
        var DefaultColor = $(this).attr('pulse-color') || $(this).css('background-color') || $(this).css('background-color') || getComputedStyle(document.documentElement).getPropertyValue('--default');
        $(this).css('--pulseColor',DefaultColor);
    });
}

/* tooltip */

function plss_tooltip_actv(e, act){
    if(act == 'show'){
        /* plss_tooltip_position($(e),$(e).attr('tooltip-id'),$(`tooltip#${$(e).attr('tooltip-id')}`).css('--tooltipSpaceMarginReference')); */
        $(`tooltip#${$(e).attr('tooltip-id')}`).css('display','').addClass('close');
        setTimeout(() => { $(`tooltip#${$(e).attr('tooltip-id')}`).addClass('open'); }, $(`tooltip#${$(e).attr('tooltip-id')}`).attr('plss_tooltipEnterDelay'));
    }else if(act == 'hide'){
        $(`tooltip#${$(e).attr('tooltip-id')}`).addClass('close');
        setTimeout(() => { 
            $(`tooltip#${$(e).attr('tooltip-id')}`).removeClass('open').addClass('close'); 
            setTimeout(() => { if(act == 'hide'){ $(`tooltip#${$(e).attr('tooltip-id')}`).css('display','none');} }, parseInt($(`tooltip#${$(e).attr('tooltip-id')}`).css('--tooltipExitDelay').replace('ms','')));
        }, $(`tooltip#${$(e).attr('tooltip-id')}`).attr('plss_tooltipExitDelay'));
    }
}

function plss_tooltip_compile(e){
    if($(e).attr('tooltip-content')){
        $(e).attr('tooltip-style', `top:${$(e).offset().top}px;left:${$(e).offset().left}px;display:none;`+($(e).attr('tooltip-style') || ''));

        var plss_tooltipSpaceMargin = ($(e).attr('tooltip-margin') || 10); /* espaçamento entre tooltip e elemento */
        var plss_tooltipEnterDuration = ($(e).attr('tooltip-enterDuration') || 200); /* Duração da animação de entrada */
        var plss_tooltipExitDuration = ($(e).attr('tooltip-exitDuration') || 200); /* Duração da animação de saída */
        var plss_tooltipEnterDelay = ($(e).attr('tooltip-enterDelay') || 1); /* Duração do tempo para entrada/aparecer */
        var plss_tooltipExitDelay = ($(e).attr('tooltip-exitDelay') || 10); /* Duração do tempo para saída/desaparecer */
        var plss_tooltipTransitionMovement = ($(e).attr('tooltip-transitionMovement') || '10px'); /* Espaço percorrido para cima ao aparecer (slide up) */

        var plss_tooltip_id = $(e).attr('tooltip-id') || `${Date.now()}`;
        $(e).attr('tooltip-id',plss_tooltip_id);

        var plss_tooltip = '';
        var attrs = $(e)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if((attrs[i].name).includes('tooltip-')){
                plss_tooltip+=`${attrs[i].name.replace('tooltip-','')}="${$(e).attr(attrs[i].name)}" `;
                if(attrs[i].name != 'tooltip-content' && attrs[i].name != 'tooltip-id')
                    $(e).removeAttr(attrs[i].name);
            }

        }

        $('body').append(`<tooltip id="${plss_tooltip_id}" ${plss_tooltip}>${$(e).attr('tooltip-content')}</tooltip>`);
        /* $(`<tooltip id="${plss_tooltip_id}" ${plss_tooltip}>${$(e).attr('tooltip-content')}</tooltip>`).insertBefore($(e)); */

        $(`#${plss_tooltip_id}`).css('--tooltipEnterDelay',plss_tooltipEnterDuration+'ms');
        $(`#${plss_tooltip_id}`).css('--tooltipExitDelay',plss_tooltipExitDuration+'ms');
        $(`#${plss_tooltip_id}`).css('--transitionMovement',plss_tooltipTransitionMovement);
        $(`#${plss_tooltip_id}`).attr('plss_tooltipEnterDelay',plss_tooltipEnterDelay);
        $(`#${plss_tooltip_id}`).attr('plss_tooltipExitDelay',plss_tooltipExitDelay);

        plss_tooltip_position($(e),plss_tooltip_id,plss_tooltipSpaceMargin);

        $(`#${plss_tooltip_id}`).css('--tooltipLeftReference',`${0 - parseInt($(`#${plss_tooltip_id}`).css('left').replace('px','')) + $(e).offset().left + (parseInt($(e).css('width').replace('px',''))/2) - 5}px`);
        $(`#${plss_tooltip_id}`).css('--tooltipSpaceMarginReference',`${plss_tooltipSpaceMargin}px`);

        $(e).attr('onmouseover',`plss_tooltip_actv($(this),'show');${$(e).attr('onmouseover') || ''}`);
        $(e).attr('onmouseout',`plss_tooltip_actv($(this),'hide');${$(e).attr('onmouseout') || ''}`);

        /* $(`#${plss_tooltip_id}`).removeAttr('id'); */
        plss_tooltip_actv($(e), 'show');
        $(e).removeAttr('tooltip-content');
    }
}

function plss_tooltip(){
    $('*[tooltip-content]').each(function (i) {
        $(this).attr('onmouseenter','plss_tooltip_compile($(this));'+($(this).attr('onmouseenter') || ''))
    });
}

function plss_tooltip_position(e,id,margin){
    $(`#${id}`).css('top',`${parseInt($(`#${id}`).css('top').replace('px','')) - parseInt($(`#${id}`).css('height').replace('px','')) - margin}px`);
        
    $(`#${id}`).css('left',`-=${(parseInt($(`#${id}`).css('width').replace('px',''))/2)}px`);
    $(`#${id}`).css('left',`+=${(parseInt($(e).css('width').replace('px',''))/2)}px`);
    
    if(parseInt($(`#${id}`).css('left').replace('px','')) < 0)
        $(`#${id}`).css('left',`0`);
    if(parseInt($(`#${id}`).css('left').replace('px','')) + parseInt($(`#${id}`).css('width').replace('px','')) > parseInt($(`body`).css('width').replace('px',''))){
        $(`#${id}`).css('right',`0`);
        $(`#${id}`).css('left',`-=${parseInt($(`#${id}`).css('width').replace('px',''))}`);
    }
    if(parseInt($(`#${id}`).css('top').replace('px','')) < 0){
        $(`#${id}`).css('top',`${$(e).offset().top + parseInt($(e).css('height').replace('px','')) + margin}px`);
        $(`#${id}`).css('--tooltipBottomReference',`auto`);
        $(`#${id}`).css('--tooltipTopReference',`-4.8px`);
        $(`#${id}`).css('--tooltipShadowReference', `inset 1px 1px 0 0 #00000030`);
    }
}

/* dropdown */

function plss_dropdown_actv(e,id){
    if(!$(`#${id}`).hasClass('sosx'))
        $(`#${id}`).addClass('sosx').parent().css('top',($(e).offset().top || $(e)[0].getBoundingClientRect().top ) + $(e).height()).css('left',($(e).offset().left || $(e)[0].getBoundingClientRect().left));
    if($(`#${id}`).parent().css('display') == 'none')
        $(`#${id}`).parent().css('display','block');
    else if($(`#${id}`).parent().css('display') == 'block')
        $(`#${id}`).parent().css('display','none');

    $(`#${id}`).toggleClass('show').parent().toggleClass('show');
}

function plss_dropdown(){
    $('*[dropdown-id]').each(function (i) {
        if($(`#${$(this).attr('dropdown-id')}`).length){
            $(this).addClass('verified');
            $(`#${$(this).attr('dropdown-id')}`).wrapAll(`<div class="plss_dropdown" />`)

            $(this).attr('onclick',`plss_dropdown_actv($(this),'${$(this).attr('dropdown-id')}');`+($(this).attr('onclick') || ''));
            $(this).addClass('plss_dropdown_point');
        }else{
            $(this).addClass('nonexistent');
        }
        $(this).removeAttr('dropdown-id');
    });
}

/* floating action */

function plss_floating_action(){
    $('.floating-action').not('.dkrv').each(function(){
        setTimeout(() => {
            $(this).addClass('dkrv');  
        }, 1000);
        if($(this).hasClass('click-only')) 
            $(this).find('.floating-action-btn').attr('onclick',`$(this).parent().toggleClass('onactive');`+$(this).attr('onclick') || '');
    });
}

/* loaders */

function plss_loaders(){
    $('.load, .loader').not('.kias').each(function (i) {
        $(this).addClass('kias');

        var size = $(this).css('width');
        if((parseInt(size.replace('px','')) + 4) == (parseInt($('body').css('width').replace('px','')))){
                size = '60px';
        }
        $(this).css('--size',`${size}`);

        if($(this).hasClass('dot') && $(this).hasClass('fade')){
            var dftColorAfter = ['ff','ee','dd','cc','bb','aa','99','88','77','66','55','44','33','22','11','00'];
            var dftColorBefore = ['150','140','130','120','110','100','90','80','70','60','50','40','30','20','10','00'];
            var defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--default');

            for(var dft = 0; dft < dftColorAfter.length; dft++){
                $(this).css(`--default${dftColorBefore[dft]}`,defaultColor+dftColorAfter[dft]);
            }
        }
    });
}

/* carousel */

function plss_carousel(){
    $('.carousel').not('.xeak').each(function (i) {
        $(this).addClass('xeak');

        if($(this).attr('carousel-count') != '3')
            $(this).attr('carousel-count','5');

        
        if($(this).find('.carousel-item').length < parseInt($(this).attr('carousel-count'))){
            for(var i=0;i<parseInt($(this).attr('carousel-count')) - $(this).find('.carousel-item').length; i++){
                $(this).append('<span style="width:200px;height:200px;background:#fff;" class="carousel-item"></span>');
            }
        } 
       
        
        $(this).find('> .carousel-item:eq(0)').attr('carousel-child','0');
        $(this).find('> .carousel-item:eq(1)').attr('carousel-child','1');
        $(this).find('> .carousel-item:eq(2)').attr('carousel-child','2');
        $(this).find(`> .carousel-item:eq(${$(this).find('.carousel-item').length - 2})`).attr('carousel-child','3');
        $(this).find(`> .carousel-item:eq(${$(this).find('.carousel-item').length - 1})`).attr('carousel-child','4');
    });
}

/* input switch functions */

function switch_change(e){
    if($(e).find('input').attr('checked')){
        $(e).find('input').removeAttr('checked');
        $(e).find('input').val((e).find('input').attr('value_off'));
    }else{
        $(e).find('input').attr('checked','1');
        $(e).find('input').val((e).find('input').attr('value_on'));
    }
}

function plss_switch(){
    $(`input[type=switch]:not(.nopl)`).not('.hidden').each(function (i) {
        $(this).addClass('hidden').wrapAll(`<div onclick="switch_change($(this))" class="plss-switch-content"/>`).parent().wrapAll(`<div class="plss-switch"/>`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        $(this).parent().append(` <div class="plss-switch-lever"></div> `);
        $(this).parent().css('--switchNonActiveBackground',getComputedStyle(document.documentElement).getPropertyValue('--gray6')+'70');
        $(this).parent().css('--switchLeverShadow','#000000'+'50');

        var placeholder_on = $(this).attr('placeholder_on') || '';
        var placeholder_off = $(this).attr('placeholder_off') || '';
        $(this).removeAttr('placeholder_on');
        $(this).removeAttr('placeholder_off');

        if(placeholder_on.includes('fa-')){
            if(!$(this).hasClass('inset')){
                placeholder_on = `<i style="width:16px;height:16px;" class="${placeholder_on}"></i>`;
            }else{
                placeholder_on = `<i style="width:12px;height:12px;" class="${placeholder_on}"></i>`;
            }
        }else{
            placeholder_on = placeholder_on.slice(0,3);
        }
        if(placeholder_off.includes('fa-')){
            if(!$(this).hasClass('inset')){
                placeholder_off = `<i style="width:16px;height:16px;" class="${placeholder_off}"></i>`;
            }else{
                placeholder_off = `<i style="width:12px;height:12px;" class="${placeholder_off}"></i>`;
            }
        }else{
            if($(this).hasClass('inset'))
                placeholder_off = placeholder_off.slice(0,3);
        }
        
        if($(this).attr('checked')){
            $(this).val($(this).attr('value_on'));
        }else{
            $(this).val($(this).attr('value_off'));
        }

        if(placeholder_on.trim() != '')
            if($(this).hasClass('inset')){
                if($(this).hasClass('up') || $(this).hasClass('classic')){
                    $(this).parent().find('.plss-switch-lever').append(`<span class="nonactv_value">${placeholder_off}</span><span class="actv_value">${placeholder_on}</span>`);
                }else if($(this).hasClass('down') && !$(this).hasClass('classic')){
                    $(this).parent().prepend(`<span class="actv_value">${placeholder_on}</span>`);
                    $(this).parent().append(`<span class="nonactv_value">${placeholder_off}</span>`);
                }
            }else{
                $(this).parent().parent().append(`<span class="nonactv_value">${placeholder_off}</span><span class="actv_value" style="color:var(--default);">${placeholder_on}</span>`);
            }
    });
}

/* input url functions */

function plss_input_url(){
    $(`input[type=url]:not(.nopl)`).not('.uyek').each(function(i){
        
        $(this).wrapAll(`<div class="plss-url"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uyek`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var btnClass = $(this).attr('class');
        
        var referenceBtn = `<div class="plss-btn plss-url-btn ${btnClass}" onclick="if($(this).parent().find('input').val() != '') window.open($(this).parent().find('input').val(),'_blank');"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>`;
        var referenceIcon = `<div class="plss-url-icon"><i class="fa-solid fa-link"></i></div>`;

        if($(this).attr('reference') == 'btn-left') $(this).parent().prepend(referenceBtn);
        else if($(this).attr('reference') == 'btn-right') $(this).parent().append(referenceBtn);
        else if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceBtn);

        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height())}px)`);
    });
}

/* input password functions */

function plss_input_password(){
    $(`input[type=password]:not(.nopl)`).not('.uoaq').each(function(i){
        var btnClass = $(this).attr('class');

        $(this).wrapAll(`<div class="plss-password"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uoaq`).addClass(`plss-password-content`).addClass(`plss-password-hidden`).addClass(`plss-protected`).attr('type','text');

        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }
        
        var referenceBtn = `<div class="plss-btn plss-password-btn ${btnClass}" onclick="$(this).parent().find('.plss-password-content').toggleClass('plss-password-hidden').toggleClass('plss-password-show');$(this).parent().find('.plss-password-content');"> <div class="eye-hidden"><i class="fa-solid fa-eye-slash"></i></div><div class="eye-show"><i class="fa-solid fa-eye"></i></div></div>`;
        var referenceIcon = `<div class="plss-password-icon"><i class="fa-solid fa-lock"></i></div>`;

        if($(this).attr('reference') == 'btn-left') $(this).parent().prepend(referenceBtn);
        else if($(this).attr('reference') == 'btn-right') $(this).parent().append(referenceBtn);
        else if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceBtn);

        if($(this).attr('reference') != 'none') $(this).parent().find('.plss-password-content').css('width',`calc(100% - ${parseInt($(this).parent().find('.plss-password-content').height())}px)`);
    });
}

/* input text functions */

function plss_input_text(){
    $(`input[type=text]:not(.nopl)`).not('.urzr').not('.plss-protected').each(function(i){
        
        $(this).wrapAll(`<div class="plss-text"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`urzr`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }
    });
}

/* input tel functions */

function format_tel(e) {
    $(e).val($(e).val().replace(/\D/g,'').replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"));
}


function plss_input_tel(){
    $(`input[type=tel]:not(.nopl)`).not('.urkd').each(function(i){
        
        $(this).wrapAll(`<div class="plss-tel"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`urkd`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var referenceIcon = `<div class="plss-tel-icon"><i class="fa-solid fa-phone"></i></div>`;

        if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceIcon);

        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height()) + 2}px)`);

        if(!$(this).attr('maxlength') ) $(this).attr('maxlength','15');

        $(this).attr('oninput',`format_tel($(this)); ${$(this).attr('oninput') || ''}`);
    });
}

/* input color functions */
function format_color(e,hex,format = 'hex') {
    if(format == 'hex'){
        $(e).parent().find('.plss-color-content-label').html(hex);
        $(e).parent().find('.plss-color-content-color').css('background',hex);
    }
    if(format == 'rgb'){
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        $(e).parent().find('.plss-color-content-label').html('rgb(' + r + ', ' + g + ', ' + b + ')');
        $(e).parent().find('.plss-color-content-color').css('background','rgb(' + r + ', ' + g + ', ' + b + ')');
    }
    if(format == 'hsl'){
        var r = parseInt(hex.slice(1, 3), 16) / 255;
        var g = parseInt(hex.slice(3, 5), 16) / 255;
        var b = parseInt(hex.slice(5, 7), 16) / 255;
        
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
    
        var h;
        if (max === min) h = 0;
        else if (max === r) h = (g - b) / (max - min);
        else if (max === g) h = 2 + (b - r) / (max - min);
        else h = 4 + (r - g) / (max - min);
        h *= 60;
        if (h < 0) h += 360;
    
        var s;
        if (max === 0) s = 0;
        else s = (max - min) / max;
        s *= 100;

        var l = (max + min) / 2;
        l *= 100;
    
        $(e).parent().find('.plss-color-content-label').html('hsl(' + Math.round(h) + ', ' + Math.round(s) + '%, ' + Math.round(l) + '%)');
        $(e).parent().find('.plss-color-content-color').css('background','hsl(' + Math.round(h) + ', ' + Math.round(s) + '%, ' + Math.round(l) + '%)');
    }
}

function plss_input_color(){
    $(`input[type=color]:not(.nopl)`).not('.uxke').each(function(i){

        $(this).wrapAll(`<div class="plss-color"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uxke`);
        
        $(this).parent().append(`<div class="plss-color-content">
            <div class="plss-color-content-label">#000000</div>
            <div onclick="$(this).parent().parent().find('input').click();" class="plss-color-content-color" style="background-color:#000000"></div>
        </div>`);

        format_color($(this),$(this).val(),$(this).attr('format'));

        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var btnClass = $(this).attr('class');
 
        var referenceBtn = `<div onclick="$(this).parent().find('input').click();" class="plss-btn plss-color-btn ${btnClass}"><i class="fa-solid fa-eye-dropper"></i></div>`;
        var referenceIcon = `<div onclick="$(this).parent().find('input').click();" class="plss-color-icon"><i class="fa-solid fa-eye-dropper"></i></div>`;

        if($(this).attr('reference') == 'btn-left') $(this).parent().prepend(referenceBtn);
        else if($(this).attr('reference') == 'btn-right') $(this).parent().append(referenceBtn);
        else if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceBtn);

        if($(this).attr('reference') != 'none') $(this).parent().find('.plss-color-content').css('width',`calc(100% - ${parseInt($(this).parent().find('.plss-color-content').height())}px)`);
    
        $(this).attr('oninput',`format_color($(this),$(this).val(),$(this).attr('format')); ${$(this).attr('oninput') || ''}`);
    
    });
}

/* input email functions */

function plss_input_email(){
    $(`input[type=email]:not(.nopl)`).not('.uwnk').each(function(i){
        
        $(this).wrapAll(`<div class="plss-email"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uwnk`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                console.log(attrs[i].name);
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var referenceIcon = `<div class="plss-email-icon"><i class="fa-solid fa-envelope"></i></div>`;

        if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceIcon);

        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height()) + 2}px)`);

    });
}

/* input search functions */

function plss_input_search(){
    $(`input[type=search]:not(.nopl)`).not('.uaex').each(function(i){

        $(this).wrapAll(`<div class="plss-search"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uaex`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var referenceIcon = `<div class="plss-search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>`;

        if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceIcon);

        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height()) + 2}px)`);

    });
}

/* input cpfcnpj functions */

function format_cpfcnpj(e) {
    var cpfcnpj = $(e).val();
    cpfcnpj = cpfcnpj.replace(/\D/g,'');

    if(cpfcnpj.length <= 11){
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1.$2");
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1.$2");
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1-$2");
    }else if(cpfcnpj.length > 11){
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1.$2");
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1.$2");
        cpfcnpj = cpfcnpj.replace(/(\d{3})(\d)/,"$1/$2");
        cpfcnpj = cpfcnpj.replace(/(\d{4})(\d)/,"$1-$2");
    }

    $(e).val(cpfcnpj);
}

function plss_input_cpfcnpj(){
    $(`input[type=cpfcnpj]:not(.nopl)`).not('.uxod').each(function(i){

        $(this).wrapAll(`<div class="plss-cpfcnpj"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`uxod`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var referenceIcon = `<div class="plss-cpfcnpj-icon"><i class="fa-regular fa-address-card"></i></div>`;

        if($(this).attr('reference') == 'icon-left') $(this).parent().prepend(referenceIcon);
        else if($(this).attr('reference') == 'icon-right') $(this).parent().append(referenceIcon);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceIcon);

        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height()) + 2}px)`);

        if(!$(this).attr('maxlength') ) $(this).attr('maxlength','19');

        $(this).attr('oninput',`format_cpfcnpj($(this)); ${$(this).attr('oninput') || ''}`);

    });
}

/* input money functions */

function format_value(e) {
    var valor = $(e).val();
    if(!valor.includes('e')){
        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        if (valor.length > 10) valor = valor.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
        if (valor.length > 14) valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");
        if (valor.length > 18) valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3.$4,$5");
        if (valor.length > 22) valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3.$4.$5,$6");
        if (valor.length > 26) valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3.$4.$5.$6,$7");
    }
    $(e).val(valor);
    if(valor == 'NaN') $(e).val('');
}

function plss_input_money(){
    $(`input[type=money]:not(.nopl)`).not('.unbt').each(function(i){

        $(this).wrapAll(`<div class="plss-money"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`unbt`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        $(this).parent().prepend(`<div class="plss-money-subtitle">${$(this).attr("subtitle") || $(this).attr("subtitle") || 'R$:'}</div>`);

        $(this).attr('oninput',`format_value($(this)); ${$(this).attr('oninput') || ''}`);
    });
}
/* input file functions */

function format_inputfile(e) {
    if($(e).parent().find('input')[0].files.length == 1 )
        $(e).parent().find('.plss-file-content').html($(e).parent().find('input')[0].files[0].name);
    if($(e).parent().find('input')[0].files.length > 1 )
        $(e).parent().find('.plss-file-content').html(`${$(e).parent().find('input')[0].files.length} arquivos`);
}

function plss_input_file(){
    $(`input[type=file]:not(.nopl)`).not('.udkw').each(function(i){
        var btnClass = $(this).attr('class');
        
        $(this).wrapAll(`<div class="plss-file"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`udkw`).addClass('hidden');
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        $(this).parent().append(`<div class="plss-file-content">Selecione um arquivo</div>`);


        var referenceBtn = `<div onclick="$(this).parent().find('input').click();" class="plss-btn plss-file-btn ${btnClass}"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>`;

        if($(this).attr('reference') == 'btn-left') $(this).parent().prepend(referenceBtn);
        else if($(this).attr('reference') == 'btn-right') $(this).parent().append(referenceBtn);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceBtn);

        /* $(this).parent().find('.plss-file-btn').width($(this).parent().find('.plss-file-btn').height()); */

        if($(this).attr('reference') != 'none') $(this).parent().find('.plss-file-content').css('width',`calc(100% - ${parseInt($(this).parent().find('.plss-file-btn').height()+3)}px)`);
    
        $(this).attr('oninput',`format_inputfile($(this)); ${$(this).attr('oninput') || ''}`);
    });
}

/* input number functions */

function verf_maxmin(e) {
    var valor = $(e).val();
    var max = $(e).attr('max');
    var min = $(e).attr('min');

    if(valor > max)
    $(e).val(max);
    if(valor < min)
    $(e).val(min);
}

function plss_input_number(){
    $(`input[type=number]:not(.nopl)`).not('.ubnv').each(function(i){

        $(this).wrapAll(`<div class="plss-number"/>`);
        $(this).parent().attr('class',($(this).attr('class') || '')+' '+($(this).parent().attr('class') || ''));
        $(this).removeAttr('class').addClass(`ubnv`);
        
        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        var btnClass = $(this).attr('class');
        
        var referenceBtn = `<div class="plss-btn plss-number-btn add ${btnClass}" onclick="$(this).parent().find('input').val(($(this).parent().find('input').val() + 1 > ${$(this).attr('max')} ? $(this).parent().find('input').val() : (parseInt($(this).parent().find('input').val() || 0) + 1)));"><i class="fa-solid fa-plus"></i></div>
                            <div class="plss-btn plss-number-btn subt ${btnClass}" onclick="$(this).parent().find('input').val(($(this).parent().find('input').val() - 1 < ${$(this).attr('min')} ? $(this).parent().find('input').val() : (parseInt($(this).parent().find('input').val() || 0) - 1)));"><i class="fa-solid fa-minus"></i></div>`;

        if($(this).attr('reference') == 'btn-left') $(this).parent().prepend(referenceBtn);
        else if($(this).attr('reference') == 'btn-right') $(this).parent().append(referenceBtn);
        else if($(this).attr('reference') == 'none') $(this).parent().append('');
        else $(this).parent().append(referenceBtn);

        /* $(this).parent().find('.plss-number-btn').width($(this).parent().find('.plss-number-btn').height()); */
        
        if($(this).attr('reference') != 'none') $(this).css('width',`calc(100% - ${parseInt($(this).height())*2 - 2}px)`);

        $(this).attr('oninput',`verf_maxmin($(this)); ${$(this).attr('oninput') || ''}`);
    });
}

/* codepreview functions */

function codepreview_text(e){
    $(e).find('.plss-codepreview-menubtns').removeClass('onactive');
    $(e).find('.plss-codepreview-menubtns_texto').addClass('onactive');
    $(e).find('.plss-codepreview-textarea').removeClass('hidden');
    $(e).find('.plss-codepreview-preview').addClass('hidden');
}

function codepreview_preview(e){
    $(e).find('.plss-codepreview-menubtns').removeClass('onactive');
    $(e).find('.plss-codepreview-menubtns_preview').addClass('onactive');
    $(e).find('.plss-codepreview-textarea').addClass('hidden');
    $(e).find('.plss-codepreview-preview').removeClass('hidden');
    
    $(e).find('.plss-codepreview-preview').html($(e).find('.plss-codepreview-textarea').val());
}

function plss_textarea_codepreview(){
    $(`textarea[type=codepreview]:not(.nopl)`).not('.rxis').each(function(i){
        $(this).addClass(`rxis`).addClass(`plss-codepreview-textarea`).attr(`placeholder`,'Código aqui...');

        $(this).wrapAll(`<div class="plss-codepreview " />`);

        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }
        
        $(this).parent().prepend(`
        <div class="plss-codepreview-menu" style="--borderColor :var(--gray3);">
            <div class="plss-codepreview-menubtns plss-codepreview-menubtns_texto onactive" onclick="codepreview_text($(this).parent().parent());">Texto</div>
            <div class="plss-codepreview-menubtns plss-codepreview-menubtns_preview" onclick="codepreview_preview($(this).parent().parent());">Preview</div>
        </div>`);

        $(this).parent().append('<div class="plss-codepreview-preview hidden"></div>');
    });
}

/* iconpreview functions */

function iconpreview(e,set){
    if(set)
    $(e).find('.plss-iconpreview-cache_area').text($(e).find('.plss-iconpreview-textarea').val());
    $(e).find('.plss-iconpreview-preview').html(`
    <span style="font-size:50px;">${$(e).find('.plss-iconpreview-textarea').val()}</span>
    <span style="font-size:30px;">${$(e).find('.plss-iconpreview-textarea').val()}</span>
    <span style="font-size:10px;">${$(e).find('.plss-iconpreview-textarea').val()}</span>
    `);
    plss();
}

function iconpreview_change(elmnt, e, icon){
    $(elmnt).find('.plss-iconpreview-menubtns').not($(e)).removeClass('onactive');
    $(e).addClass('onactive');
    if($(e).html() == 'Outro'){
        $(elmnt).find('.plss-iconpreview-textarea').removeClass('hidden');
        $(elmnt).find('.plss-iconpreview-textarea').val($(elmnt).find('.plss-iconpreview-cache_area').val());
        $(elmnt).find('.plss-iconpreview-leg_link').removeClass('hidden');
        $(elmnt).find('.plss-iconpreview-preview').removeClass('preset');
    }
    else{
        $(elmnt).find('.plss-iconpreview-textarea').addClass('hidden');
        $(elmnt).find('.plss-iconpreview-textarea').val(`<i class="${icon}"></i>`);
        $(elmnt).find('.plss-iconpreview-leg_link').addClass('hidden');
        $(elmnt).find('.plss-iconpreview-preview').addClass('preset');
    }
    iconpreview(elmnt);
}
  
function plss_textarea_iconpreview(){
    $(`textarea[type=iconpreview]:not(.nopl)`).not('.ruxb').each(function(i){
        $(this).addClass(`ruxb`).addClass(`hidden`).addClass(`plss-iconpreview-textarea`).attr(`placeholder`,'Código do ícone aqui...');

        if($(this).val() == '')
            $(this).text('<i class="fa-brands fa-polaris"></i>');

        $(this).wrapAll(`<div class="plss-iconpreview " />`);

        var attrs = $(this)[0].attributes;
        for(var i = attrs.length - 1; i >= 0; i--) {
            if(plss_nosafeattributes.includes(attrs[i].name)){
                $(this).parent().attr(attrs[i].name, `${$(this).attr(attrs[i].name)}`);
                $(this).removeAttr(attrs[i].name);
            }
        }

        $(this).parent().append('<div class="plss-iconpreview-preview"></div>');
        $(this).parent().append('<a class="plss-iconpreview-leg_link" target="_new" href="https://fontawesome.com/search?o=r&m=free">Visite Font Awesome para mais</a>');
        $(this).parent().append(`<textarea class="hidden plss-iconpreview-cache_area">${$(this).val()}</textarea>`);

        $(this).parent().prepend(`
            <div class="plss-iconpreview-menu" style="--borderColor :var(--gray3);">
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-solid fa-star');"><i class="fa-solid fa-star"></i></div>
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-solid fa-clock');"><i class="fa-solid fa-clock"></i></div>
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-solid fa-briefcase');"><i class="fa-solid fa-briefcase"></i></div>
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-solid fa-location-dot');"><i class="fa-solid fa-location-dot"></i></div>
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-solid fa-hammer');"><i class="fa-solid fa-hammer"></i></div>
                <div class="plss-button plss-iconpreview-menubtns" onclick="iconpreview_change($(this).parent().parent(),$(this),'fa-brands fa-polaris');"><i class="fa-brands fa-polaris"></i></div>
                <div class="plss-button plss-iconpreview-menubtns plss-iconpreview-outro" onclick="iconpreview_change($(this).parent().parent(),$(this));">Outro</div>
            </div>`);

        $(this).parent().find('.plss-iconpreview-menu .plss-iconpreview-menubtns').each(function(){
            if($(this).html() == $(this).parent().parent().find('.plss-iconpreview-textarea').val()) $(this).addClass('onactive');
        });

        if(!$(this).parent().find('.plss-iconpreview-menu .plss-iconpreview-menubtns.onactive').length){
            $(this).parent().find('.plss-iconpreview-outro').addClass('onactive');
        }

        $(this).parent().find('.plss-iconpreview-menu .plss-iconpreview-menubtns.onactive').trigger('click');

        if($(this)[0].outerHTML.includes('oninput'))
            $(this)[0].outerHTML = $(this)[0].outerHTML.replace('oninput="',`oninput="iconpreview($(this).parent(),true); `);
        else
            $(this)[0].outerHTML = $(this)[0].outerHTML.replace('<textarea ',`<textarea oninput="iconpreview($(this).parent(),true);" `);
    });
}

/* select3 functions */

function select3_define(e){
    if($(e).parent().parent().parent().parent().attr('multi') != '1'){
        $(e).parent().attr('value',$(e).val());
        $(e).parent().parent().find('.select3_content-values_input').val($(e).val());
        $(e).parent().parent().parent().find('.cssplss_select3').val($(e).text());
        $(e).parent().parent().toggleClass('hidden');
        $(e).parent().parent().parent().find('.cssplss_select3').removeClass('cssplss_select3-open');
        $(e).parent().parent().parent().find('.cssplss_select3').addClass('cssplss_select3-close');
    }else{
        if(!$(e).attr('target')) $(e).attr('target','1'); else $(e).removeAttr('target');
    
        if(!$(e).parent().attr('value'))
            $(e).parent().attr('value','');
        else if($(e).val() != '')
            $(e).parent().attr('value',$(e).parent().attr('value') + ',');
    
        var content = $(e).parent().attr('value'); 
        var c = ', ';
        
        if(!$(e).parent().parent().parent().find('.cssplss_select3').val()){
            $(e).parent().parent().parent().find('.cssplss_select3').val('');
            c = '';
        }

        var contentShow = $(e).parent().parent().parent().find('.cssplss_select3').val()+c; 

        if($(e).val() != '')
            var value = `'${$(e).val()}'`;

        var valueShow = $(e).text();
        
        if($(e).attr('target')){
            if(value != undefined)
            content += value+',';

            contentShow += valueShow+', ';
        }
        else{
            if(value != undefined)
            content = content.replace(`${value},`,'');

            contentShow = contentShow.replace(`${valueShow}, `,'');
        }
        if(value != undefined)
            content = content.slice(0, -1);

        contentShow = contentShow.slice(0, -1).slice(0, -1);

        $(e).parent().parent().parent().find('.cssplss_select3').val(contentShow);
        $(e).parent().parent().find('.select3_content-values_input').val(content);
        $(e).parent().attr('value',content);
        if(!$(e).parent().attr('value'))
            $(e).parent().removeAttr('value');
        if(!$(e).parent().parent().find('.select3_content-values_input').attr('value'))
            $(e).parent().parent().find('.select3_content-values_input').removeAttr('value');
    }
    $(e).parent().parent().find('.select3_content-values_input').trigger('change');
}

function select3_search(e){
    $(e).parent().find('.select3_content-options option').each(function(i){
    if(removeAcento($(this).text()).includes(removeAcento($(e).val())))
        $(this).removeClass('hidden');
    else
        $(this).addClass('hidden');
    });
}

function go_options(e){
    $('.cssplss_select3').not($(e)).removeClass('cssplss_select3-open');
    $('.cssplss_select3').not($(e)).addClass('cssplss_select3-close');
    $('.select3_content').not($(e).parent().find('.select3_content')).addClass('hidden');

    $(e).parent().find('.select3_content-search').focus();
    
    $(e).parent().find('.select3_content').toggleClass('hidden');
    $(e).toggleClass('cssplss_select3-close');
    $(e).toggleClass('cssplss_select3-open');
    var select3_id = $(e).parent().find('.select3_content-options').attr('id');
    var select3_cord_width = `${$(e)[0].getBoundingClientRect()['width']}px`;
    if(!$(e).parent().parent().hasClass('akxr')){
        $(e).parent().parent().addClass(`akxr`);
        $(e).parent().find('.select3_content').css('width',select3_cord_width);
    }
    $(e).parent().parent().find('option').not('.iakxr').each(function(i){
        select3_add(`#${select3_id}`,$(this)[0].outerHTML,$(this).val(),$(this).html());
        $(this).remove();
    }); 
}

function select3_add(id, val,content_val,content_text){
    if(val.includes('selected')){
        val = val.replace('selected=""','selected="1"');
        $(id).parent().parent().find('.cssplss_select3').val(content_text);
        $(id).attr('value',content_val);
    }
    if(!val.includes('iakxr'))
        if(val.includes('class'))
            val = val.replace('class="','class="iakxr ');
        else
            val = val.replace('<option ','<option class="iakxr" ');
    if(!val.includes('select3_define(this);'))
        if(val.includes('onclick'))
            val = val.replace('onclick="','onclick="select3_define(this); ');
        else
            val = val.replace('<option ','<option onclick="select3_define(this);" ');
    
    $(id).append(val);
}

$(document).on('click', function(event) {
    var target = $(event.target);
    if (!target.hasClass('plss_dropdown') && !target.hasClass('plss_dropdown_point') && !target.closest($('.plss_dropdown')).length && target.prop('tagName').toLowerCase() != 'dropdown') {
        $('.plss_dropdown').removeClass('show').css('display','none');
        $('.plss_dropdown').find('.dropdown').removeClass('show');
        $('.plss_dropdown').find('dropdown').removeClass('show');
    }
    if (!target.hasClass('floating-action') && !target.closest($('.floating-action')).length){
        $('.floating-action').removeClass('onactive');
    }
});

function rgbToHex(rgb) {
    // Verifica se o valor de entrada está no formato correto
    var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    // Converte os valores de RGB para hexadecimal
    var r = parseInt(match[1]);
    var g = parseInt(match[2]);
    var b = parseInt(match[3]);
    var hex = '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

    return hex;
}

function formatar_mes(mes,tipo = false){
    var val = parseInt(mes) - 1;
    var mes_extenso = [ 'Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
    var mes_extenso_min = [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ];
    if(tipo == true)
        return mes_extenso_min[val];
    else if(tipo == false)
        return mes_extenso[val];
}

function lightenColor(hexColor, amount) {
    // Remove o caractere '#' do início do valor hexadecimal
    hexColor = hexColor.replace('#', '');
  
    // Converte o valor hexadecimal em um número inteiro
    var colorValue = parseInt(hexColor, 16);
  
    // Separa os componentes de cor RGB
    var red = (colorValue >> 16) & 255;
    var green = (colorValue >> 8) & 255;
    var blue = colorValue & 255;
  
    // Calcula o novo valor dos componentes de cor
    red += Math.round((255 - red) * amount);
    green += Math.round((255 - green) * amount);
    blue += Math.round((255 - blue) * amount);
  
    // Combina os componentes de cor em um novo valor hexadecimal
    var newColorValue = (red << 16) | (green << 8) | blue;
  
    // Converte o valor hexadecimal de volta para uma string e adiciona o caractere '#'
    var newHexColor = '#' + newColorValue.toString(16).padStart(6, '0');
  
    return newHexColor;
}

function darkenColor(hexColor, amount) {
    // Remove o caractere '#' do início do valor hexadecimal
    hexColor = hexColor.replace('#', '');
  
    // Converte o valor hexadecimal em um número inteiro
    var colorValue = parseInt(hexColor, 16);
  
    // Separa os componentes de cor RGB
    var red = (colorValue >> 16) & 255;
    var green = (colorValue >> 8) & 255;
    var blue = colorValue & 255;
  
    // Calcula o novo valor dos componentes de cor
    red -= Math.round(red * amount);
    green -= Math.round(green * amount);
    blue -= Math.round(blue * amount);
  
    // Combina os componentes de cor em um novo valor hexadecimal
    var newColorValue = (red << 16) | (green << 8) | blue;
  
    // Converte o valor hexadecimal de volta para uma string e adiciona o caractere '#'
    var newHexColor = '#' + newColorValue.toString(16).padStart(6, '0');
  
    return newHexColor;
  }

function removeAcento (text){       
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

/* toast */

function pl_toast(text,autoclose = true,classes,styles){
    if(text.split() == '') return;
    if(!$('body').find('.plss_toast_content').length)
        $('body').prepend(`
            <div id="plss_toast">
            </div>
        `);
    
    var plss_toast_id = Date.now();

    if(!autoclose){
        var plss_toast_autoclose = `
            <div class="plss_toast_autoclose" onclick="pl_toast_remove($(this).parent().attr('id'),0,200);"><i class="fa-solid fa-xmark"></i></div>
        `
    }

    if($('#plss_toast').height() > ($('html').height()*0.6)){
        pl_toast_remove($('.plss_toast_content').eq(0).attr('id'));
    }

    $('#plss_toast').append(`
        <div id="plss_toast_content_${plss_toast_id}" class="${classes || ''} plss_toast_content left hide" style="${styles || ''}">
            ${plss_toast_autoclose || ''}
            ${(text || '')}
        </div>
    `);

    pl_toast_show(`plss_toast_content_${plss_toast_id}`,10);

    if(autoclose)
        pl_toast_remove(`plss_toast_content_${plss_toast_id}`,8000,200);
    else
        plss();

}

function pl_toast_show(e,t=8000){
    setTimeout(() => {
        $(`#${e}`).removeClass('hide').removeClass('left').addClass('show');
    }, t);
}

function pl_toast_remove(e,t=0,f=0){
    setTimeout(() => {
        $(`#${e}`).addClass('hide').addClass('top').removeClass('show');
        setTimeout(() => {
            $(`#${e}`).remove();
            if(!$('.plss_toast_content').length){
                $('#plss_toast').remove();
            }
        }, f);
    }, t);
}

/* N.toast({html:'aaa'}) */
var P = {
    'toast':function(obj){
        pl_toast(obj.html,obj.closebtn,obj.class,obj.style);
    }
};


$(document).ready(function(){
    plss();
});
/* setInterval(() => { plss(); }, 100); */
window.hideAssociation=function(o,a){jQuery("#associations .control-group").each(function(){jQuery(this).find(".control-label label").attr("for").replace("_id","")==o+"_associations_"+a.replace("-","_")&&jQuery(this).hide()})},window.showAssociationMessage=function(){jQuery("#associations .control-group").hide(),jQuery("#associations").prepend('<div id="associations-notice" class="alert alert-info">'+Joomla.JText._("JGLOBAL_ASSOC_NOT_POSSIBLE")+"</div>")},Joomla.injectAssociations=function(o,a){var s;if(o.success){if(0!==o.data.length)for(var e in o.data)s=a+e.replace("-","_"),window[s](o.data[e].id,o.data[e].title,o.data[e].catid,null,null,e);o.message&&Joomla.renderMessages({notice:[o.message]})}else Joomla.renderMessages({warning:[Joomla.JText._("JGLOBAL_ASSOCIATIONS_PROPAGATE_FAILED")]})},Joomla.propagateAssociation=function(o,a){var s=jQuery("#"+o+"_id").val(),e=jQuery("#jform_language").find(":selected").val(),i=Joomla.getOptions("csrf.token",""),n=jQuery("form[name='adminForm']").attr("action");return n+="&"+i+"=1",jQuery.ajax({url:n,data:{task:"ajax.fetchAssociations",format:"json",assocId:s,excludeLang:e},success:function(o,s,e){Joomla.injectAssociations(o,a)},error:function(){Joomla.renderMessages({warning:[Joomla.JText._("JGLOBAL_ASSOCIATIONS_PROPAGATE_FAILED")]})}}),!1},window,document,Joomla,jQuery(document).ready(function(o){var a=Joomla.getOptions("system.associations.edit"),s=a.formControl||"jform";1==a.hidden?window.showAssociationMessage():window.hideAssociation(s,o("#"+s+"_language").val()),o("#"+s+"_language").on("change",function(a){Joomla.removeMessages(),o("#associations-notice").remove();var e=!1;o("#associations .control-group").each(function(){var a=o(this).find(".control-label label").attr("for").replace("_id","").replace("jform_associations_","");o(this).show(),e||""===o("#"+s+"_associations_"+a+"_id").val()||(e=!0),o("#"+s+"_associations_"+a+"_clear").click()}),e&&Joomla.renderMessages({warning:[Joomla.JText._("JGLOBAL_ASSOCIATIONS_RESET_WARNING")]});var i=o(this).val();"*"==i?window.showAssociationMessage():window.hideAssociation(s,i)})});
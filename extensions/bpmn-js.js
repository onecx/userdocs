module.exports.register = (registry, context) => {
    registry.blockMacro(function () {
        var self = this
        self.named('bpmn-js')     
        self.process(function (parent, target, attrs) {            
            if (target === 'viewer') {
                const createHtmlFragment = (html) => this.createBlock(parent, "pass", html);
                if (attrs.callouts === undefined) {
                    attrs.callouts = ''
                }
                const node = createHtmlFragment("<div class='paragraph'>\n<div bpmn='_attachments/bpmn/" + attrs.file + "' callouts='" + attrs.callouts + "'/>\n</div>");
                parent.blocks.push(node); 
                return;
            }                   
        })
    })

    registry.inlineMacro(function () {
        var self = this
        self.named('bpmn-js')
        self.process(function (parent, target, attrs) {            
            if (target === 'callout') {
                return this.createBlock(parent, 'pass', `<span class="callout">${attrs.nr}</span>`).convert();
            }
        })
    })
  
  };


$(function () {
  // Dropdown funcional
  const brandData = {
    addorna: {
      logo: "assets/variables/addorna/addorna-logo.png",
      corDivisoria: "#a4a980",
      corCargo: "#a4a980",
      whatsapp: "assets/variables/addorna/addorna-whats.png",
      telefone: "assets/variables/addorna/addorna-telefone.png",
      local: "assets/variables/addorna/addorna-endereco.png",
      instagram: "assets/variables/addorna/addorna-insta.png",
      site: "assets/variables/addorna/addorna-site.png",
      instagramLink: "https://www.instagram.com/addornacasa",
      siteLink: "https://www.addorna.com.br",
    },
    "center-festas": {
      logo: "assets/variables/center-festas/center-festas-logo.png",
      corDivisoria: "#D0A44E",
      corCargo: "#D0A44E",
      whatsapp: "assets/variables/center-festas/center-festas-whats.png",
      telefone: "assets/variables/center-festas/center-festas-telefone.png",
      local: "assets/variables/center-festas/center-festas-endereco.png",
      instagram: "assets/variables/center-festas/center-festas-insta.png",
      site: "assets/variables/center-festas/center-festas-site.png",
      instagramLink: "https://www.instagram.com/centerfestas",
      siteLink: "https://www.centerfestas.com.br",
    },
    deccora: {
      logo: "assets/variables/deccora/deccora-logo.png",
      corDivisoria: "#054236",
      corCargo: "#054236",
      whatsapp: "assets/variables/deccora/deccora-whats.png",
      telefone: "assets/variables/deccora/deccora-telefone.png",
      local: "assets/variables/deccora/deccora-endereco.png",
      instagram: "assets/variables/deccora/deccora-insta.png",
      site: "assets/variables/deccora/deccora-site.png",
      instagramLink: "https://www.instagram.com/deccoracasa",
      siteLink: "https://www.deccora.com.br",
    },
  };

  $("#brand-select").on("change", function () {
    const value = $(this).val();
    if (value === "none") {
      $(".preview").hide();
      $("#preview-placeholder").show();
    } else {
      $(".preview").show();
      $("#preview-placeholder").hide();
      const data = brandData[value];
      $("#logo-empresa").attr("src", data.logo);
      $("#cor-divisoria").css("background-color", data.corDivisoria);
      $("#a_cargo").css("color", data.corCargo);
      $("#ico_whatsapp").attr("src", data.whatsapp);
      $("#ico-telefone").attr("src", data.telefone);
      $("#ico-local").attr("src", data.local);
      $("#ico-instagram").attr("src", data.instagram);
      $("#ico-site").attr("src", data.site);
      $("#instagram").attr("href", data.instagramLink);
      $("#site").attr("href", data.siteLink);
    }
  });

  // Inicialização: esconde preview se nada selecionado
  if ($("#brand-select").val() === "none") {
    $(".preview").hide();
    $("#preview-placeholder").show();
  }

  $("#copiar").click(function (e) {
    selectElementContents(document.getElementById("assinatura"));
    document.getSelection().removeAllRanges();
    $("#status").html("Copiado com sucesso!");
  });

  $("#nome").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "Nome";
    }
    $("#a_nome").html(value);
  });

  $("#cargo").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "Cargo";
    }
    $("#a_cargo").html(value);
  });

  $("#whatsapp").on("input paste", function (e) {
    var value = $(this).val();
    if (!value) {
      value = "WhatsApp";
    }
    $("#a_whatsapp").html(
      '<img id="ico_whatsapp" src="' +
        $("#ico_whatsapp").attr("src") +
        '" style="display: inline-block; margin-right: 4px; vertical-align: middle;"> ' +
        value
    );
  });

  $("#telefone-adicional").on("input paste", function (e) {
    var value = $(this).val();
    if (!value || value.trim() === "") {
      $("#a_tel-opcional").hide();
    } else {
      $("#a_tel-opcional").show().html(value);
    }
  });

  // Inicialização: oculta campo opcional se vazio
  if (!$("#telefone-adicional").val()) {
    $("#a_tel-opcional").hide();
  }
});

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
    document.execCommand("copy");
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    range.execCommand("Copy");
  }
}

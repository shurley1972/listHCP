define([], function( ) { return  JSON.stringify({"components":[{"Title":"buttonscustom","Require":{"name":"buttonscustom","proto":false,"path":"buttonscustom"},"Markup":{"tag":"component-buttonscustom"},"Params":{"hidden":false,"save":true,"cancel":true,"deletesubmitted":true,"moderation":"Draft","uniqueid":"Counter"}},{"Title":"attachmentcustom","Require":{"name":"attachmentcustom","proto":false,"path":"attachmentcustom"},"Markup":{"tag":"component-attachmentcustom"},"Params":{"prefix":"","required":false}},{"Title":"textboxcustom","Require":{"name":"textboxcustom","proto":false,"path":"textboxcustom"},"Markup":{"tag":"component-textboxcustom"},"Connections":{"ListItem":["Text"]},"Params":{"InternalName":"","Title":"","Description":"","width":"600px","maxlength":255,"required":true,"label":"","infotip":"","datatype":"","placeholder":""}},{"Title":"oecapproval","Require":{"name":"oecapproval","proto":false,"path":"oecapproval"},"Markup":{"tag":"component-oecapproval"},"Params":{"ID":"ManagerApproval","NextID":"","StepName":"Manager Approval Needed","ApproverType":"User","ApproverAccountID":"kpandya","FirstStep":"true","closeonclick":false}},{"Title":"managerapproval","Require":{"name":"managerapproval","proto":false,"path":"managerapproval"},"Markup":{"tag":"component-managerapproval"},"Params":{"ID":"ManagerApproval","NextID":"","StepName":"Manager Approval Needed","ApproverType":"User","ApproverAccountID":"sphurley","FirstStep":"true","closeonclick":false}}],"columns":{"mwp_FormID":"<Field ID=\"{3c53b379-6256-4ab5-bc14-8fa61360e526}\" Type=\"Text\" Name=\"mwp_FormID\" Required=\"FALSE\" DisplayName=\"Form ID\" Description=\"Unique Form Identificator\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormID\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar4\" RowOrdinal=\"0\"><Default>0</Default></Field>","mwp_FormType":"<Field ID=\"{ac53b379-6156-4aa5-bc14-8fa6136be526}\" Type=\"Text\" Name=\"mwp_FormType\" Required=\"FALSE\" DisplayName=\"Form Type\" Description=\"Give SPA Form Name\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormType\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar3\" RowOrdinal=\"0\"><Default>Generic SPA Form</Default></Field>","mwp_FormState":"<Field ID=\"{2223b379-4a56-25b5-bc14-8f3c5360e526}\" Type=\"Text\" Name=\"mwp_FormState\" Required=\"FALSE\" DisplayName=\"Form State\" Description=\"Form State\" Group=\"Medline Web Portal\" SourceID=\"{f24ebe2f-c0d9-4b7d-85e5-22157a4ff0a1}\" StaticName=\"mwp_FormState\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar5\" RowOrdinal=\"0\"><Default>Draft</Default></Field>","mwp_CustomerNumber":"<Field Type=\"Text\" DisplayName=\"Customer Number\" Group=\"HCP Hosted Event Form\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be501}\" Name=\"mwp_CustomerNumber\" StaticName=\"mwp_CustomerNumber\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar9\" RowOrdinal=\"0\" Version=\"1\" />","mwp_OrganizationName":"<Field Type=\"Text\" DisplayName=\"Organization Name\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{083e7f60-f721-4215-bf2a-8a45cda4c3d7}\" Name=\"mwp_OrganizationName\" StaticName=\"mwp_OrganizationName\" MaxLength=\"255\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar6\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventTitle":"<Field Type=\"Text\" DisplayName=\"Event Title\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be504}\" Name=\"mwp_EventTitle\" StaticName=\"mwp_EventTitle\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar14\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventVenue":"<Field Type=\"Text\" DisplayName=\"Event Venue\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be508}\" Name=\"mwp_EventVenue\" StaticName=\"mwp_EventVenue\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar12\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventCity":"<Field Type=\"Text\" DisplayName=\"Event City\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be510}\" Name=\"mwp_EventCity\" StaticName=\"mwp_EventCity\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar8\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ExpectedNumberofAttendees":"<Field Type=\"Number\" DisplayName=\"Expected number of attendees\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50e}\" Name=\"mwp_ExpectedNumberofAttendees\" StaticName=\"mwp_ExpectedNumberofAttendees\" Percentage=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"float1\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ExpectedTypeofAttendees":"<Field Type=\"Text\" DisplayName=\"Expected type of attendees\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be509}\" Name=\"mwp_ExpectedTypeofAttendees\" StaticName=\"mwp_ExpectedTypeofAttendees\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar13\" RowOrdinal=\"0\" Version=\"1\" />","mwp_PayeeTaxId":"<Field Type=\"Text\" DisplayName=\"Payee Tax Id\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50a}\" Name=\"mwp_PayeeTaxId\" StaticName=\"mwp_PayeeTaxId\" MaxLength=\"255\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar7\" RowOrdinal=\"0\" Version=\"1\" />","mwp_VendorBoothFee":"<Field Type=\"Currency\" DisplayName=\"Vendor Booth Fee\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be512}\" Name=\"mwp_VendorBoothFee\" StaticName=\"mwp_VendorBoothFee\" LCID=\"127\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"float2\" RowOrdinal=\"0\" Version=\"1\" />","mwp_Topic":"<Field Type=\"Text\" DisplayName=\"Topic\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50b}\" Name=\"mwp_Topic\" StaticName=\"mwp_Topic\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar23\" RowOrdinal=\"0\" Version=\"1\" />","mwp_SpeakerName":"<Field Type=\"Text\" DisplayName=\"Speaker Name\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{60031f8f-2022-4c7b-bcc6-004c591ff015}\" Name=\"mwp_SpeakerName\" StaticName=\"mwp_SpeakerName\" MaxLength=\"255\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar10\" RowOrdinal=\"0\" Version=\"1\" />","mwp_DescribeOther":"<Field Type=\"Text\" DisplayName=\"Describe Other\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be507}\" Name=\"mwp_DescribeOther\" StaticName=\"mwp_DescribeOther\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar11\" RowOrdinal=\"0\" Version=\"1\" />","mwp_OtherValue":"<Field Type=\"Text\" DisplayName=\"Other Value\" Group=\"HCP Hosted Event Form\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50f}\" Name=\"mwp_OtherValue\" StaticName=\"mwp_OtherValue\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar22\" RowOrdinal=\"0\" Version=\"1\" />","mwp_DescriptionAndPurposeOfEvent":"<Field Type=\"Note\" DisplayName=\"Description and purpose of event\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be511}\" Name=\"mwp_DescriptionAndPurposeOfEvent\" StaticName=\"mwp_DescriptionAndPurposeOfEvent\" RichText=\"FALSE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" UnlimitedLengthInDocumentLibrary=\"FALSE\" NumLines=\"6\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"ntext3\" RowOrdinal=\"0\" Version=\"1\" />","Title":"<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\" EnforceUniqueValues=\"FALSE\" MaxLength=\"255\" Sealed=\"FALSE\" Version=\"1\" RowOrdinal=\"0\" />","mwp_OneDayEvent":"<Field Type=\"Text\" DisplayName=\"One Day Event\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be50c}\" Name=\"mwp_OneDayEvent\" StaticName=\"mwp_OneDayEvent\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar20\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventStartDate":"<Field Type=\"DateTime\" DisplayName=\"Event Start Date\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be502}\" Name=\"mwp_EventStartDate\" StaticName=\"mwp_EventStartDate\" Format=\"DateTime\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"datetime2\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventEndDate":"<Field Type=\"DateTime\" DisplayName=\"Event End Date\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be503}\" Name=\"mwp_EventEndDate\" StaticName=\"mwp_EventEndDate\" Format=\"DateTime\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"datetime3\" RowOrdinal=\"0\" Version=\"1\" />","mwp_EventState":"<Field Type=\"Choice\" DisplayName=\"Event State\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be517}\" Name=\"mwp_EventState\" StaticName=\"mwp_EventState\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar15\" RowOrdinal=\"0\" Version=\"4\" Indexed=\"FALSE\"><CHOICES><CHOICE>_</CHOICE></CHOICES></Field>","mwp_IsTheEventOpenToTheCommunity":"<Field Type=\"Choice\" DisplayName=\"Is the event open to the community\" Group=\"HCP Hosted Event Form\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be516}\" Name=\"mwp_IsTheEventOpenToTheCommunity\" StaticName=\"mwp_IsTheEventOpenToTheCommunity\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar17\" RowOrdinal=\"0\" Version=\"1\"><CHOICES /></Field>","mwp_VendorBooth":"<Field Type=\"Choice\" DisplayName=\"Vendor Booth\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be514}\" Name=\"mwp_VendorBooth\" StaticName=\"mwp_VendorBooth\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar24\" RowOrdinal=\"0\" Version=\"1\"><CHOICES /></Field>","mwp_InService":"<Field Type=\"Choice\" DisplayName=\"InService\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be519}\" Name=\"mwp_InService\" StaticName=\"mwp_InService\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar16\" RowOrdinal=\"0\" Version=\"1\"><CHOICES /></Field>","mwp_OtherParticipation":"<Field Type=\"Choice\" DisplayName=\"Other Participation\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be51a}\" Name=\"mwp_OtherParticipation\" StaticName=\"mwp_OtherParticipation\" Format=\"Dropdown\" FillInChoice=\"FALSE\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"nvarchar21\" RowOrdinal=\"0\" Version=\"1\"><CHOICES /></Field>","mwp_TermsAndConditions":"<Field Type=\"Boolean\" DisplayName=\"Terms and Conditions\" Group=\"Third Party Hosted Event\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{bc13b401-6156-4aa5-bc14-8fa6136be515}\" Name=\"mwp_TermsAndConditions\" StaticName=\"mwp_TermsAndConditions\" SourceID=\"{5467b117-849f-4fe6-b5e9-ef958deeeba4}\" ColName=\"bit1\" RowOrdinal=\"0\" Version=\"1\" />","mwp_ApprovalWorkflow":"<Field Type=\"Note\" DisplayName=\"mwp_ApprovalWorkflow\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{e7e87ed8-0296-4c31-b721-2ec9ede31109}\" Name=\"mwp_ApprovalWorkflow\" StaticName=\"mwp_ApprovalWorkflow\" Sortable=\"FALSE\" RichText=\"FALSE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" UnlimitedLengthInDocumentLibrary=\"FALSE\" NumLines=\"6\" SourceID=\"{daf8e407-d019-4c86-ba35-822c1763ac52}\" ColName=\"ntext4\" RowOrdinal=\"0\" Version=\"1\" />","Reportable":"<Field Type=\"Text\" DisplayName=\"Reportable\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{1303a75c-38e0-4b49-8d7e-9c23b11f1084}\" SourceID=\"{daf8e407-d019-4c86-ba35-822c1763ac52}\" StaticName=\"Reportable\" Name=\"Reportable\" ColName=\"nvarchar30\" RowOrdinal=\"0\" />","ReportabilityReasons":"<Field Type=\"Text\" DisplayName=\"Reportability Reasons\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{edd935f0-9b6c-4b9a-bfea-ab6e88bac9bc}\" SourceID=\"{daf8e407-d019-4c86-ba35-822c1763ac52}\" StaticName=\"ReportabilityReasons\" Name=\"ReportabilityReasons\" ColName=\"nvarchar32\" RowOrdinal=\"0\" Version=\"1\" />"},"timestamp":"Fri Dec 16 2016 11:26:12 GMT-0600 (Central Standard Time)"});});
import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Fragment } from "react";
const purchaseOrder = [
  {
    id: 1,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 2,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 4,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 5,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 6,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 7,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
  {
    id: 8,
    item: "Laptop",
    company: "Dell",
    price: 100000,
    ram: "16gb",
    rom: "4gb",
    hdd: "500gb",
    model: "i7",
    place: "Ktm",
    details: [
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
      {
        name: "5551X1",
        color: "red",
        body: "metal",
        display: "11inch",
        price: 200,
      },
    ],
  },
];
const PDFReport = () => {
  let totalPrice = 0;
  const getReport = () => {
    const updatedData = purchaseOrder.map((_, i) => {
      const length = purchaseOrder[i].details.length;
      // this is done because the actual position of the total price is 2 i.e. master
      // and header of detail plus length i.e. length of details plus one that is position of price
      return 2 + length + 1;
    });
    const againUpdated = updatedData.map((data, i) => {
      if (i > 0) {
        let addedData = 0;
        for (let j = 0; j < i; j++) {
          addedData = addedData + updatedData[j];
        }
        return data + addedData - 1;
      } else {
        return data - 1;
      }
    });
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait";
    // Object.keys(response[0]).length < 7 ? "portrait" : "landscape"; // portrait or landscape
    const doc = new jsPDF(orientation, unit, size);

    const title = "Inventory Management System";
    const address = "Shankhamul Kathmandu";
    const report = "Purchase Order Report (Summary)";
    const currentDate = `Printed Date/Time: ${new Date().toLocaleString()}`;
    const printedBy = "Printed By: Meraki Techs";
    const dateRange = "Date Range:";
    const adDate = `${new Date().toLocaleString()} to ${new Date().toLocaleString()}`;

    const table = document.getElementById("table");
    const totalPagesExp = "{total_pages_count_string}";
    autoTable(doc, {
      theme: "grid",
      html: table,
      columnStyles: {
        0: { halign: "center" },
      },
      didDrawPage: function (data) {
        // header
        doc.setFontSize(15);
        doc.text(title, 180, 42);
        doc.text(address, 186, 58);
        doc.text(report, 180, 74).setFontSize(10);
        doc.text(currentDate, 350, 100);
        doc.text(printedBy, 350, 110);
        doc.text(dateRange, 40, 100);
        doc.text(adDate, 40, 120);
        // footer
        let str = "Page " + doc.internal.getNumberOfPages();
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === "function") {
          str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(10);
        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: { top: 130 },
      didParseCell(data) {
        const rows = data.table.body;
        if (
          data.cell.text === "S.N" ||
          data.cell.text === "Name" ||
          data.cell.text === "Color" ||
          data.cell.text === "Body" ||
          data.cell.text === "Display" ||
          data.cell.text === "Price" ||
          againUpdated.includes(data.row.index)
        ) {
          data.cell.styles.fontStyle = "bold";
          data.cell.styles.halign = "center";
        } else if (
          data.row.index === rows.length - 1 &&
          data.cell.text[0].includes("Rs")
        ) {
          data.cell.styles.fontStyle = "bold";
          data.cell.styles.halign = "center";
        }
      },
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }

    doc.save("test.pdf");
  };

  return (
    <div>
      <button className="btn btn-primary mt-5 ml-5" onClick={() => getReport()}>
        Generate PDF Report
      </button>
      <button className="btn btn-primary mt-5 ml-5" onClick={() => getReport()}>
        Generate Excel Report
      </button>
      <table id="table" className="table grid" style={{ display: "none" }}>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Item</th>
            <th>Company</th>
            <th>Price</th>
            <th>RAM</th>
            <th>ROM</th>
            <th>HDD</th>
            <th>Model</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrder.map((order, i) => {
            const {
              item,
              company,
              price,
              ram,
              rom,
              hdd,
              model,
              place,
              details,
            } = order;
            totalPrice = totalPrice + price;
            let tablePrice = 0;
            return (
              <Fragment key={i}>
                <tr key={i}>
                  <td rowSpan={2 + purchaseOrder[i].details.length + 1}>
                    {i + 1}
                  </td>
                  <td>{item}</td>
                  <td>{company}</td>
                  <td>{`Rs. ${price}`}</td>
                  <td>{ram}</td>
                  <td>{rom}</td>
                  <td>{hdd}</td>
                  <td>{model}</td>
                  <td>{place}</td>
                </tr>
                <tr>
                  <th>S.N</th>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Body</th>
                  <th>Display</th>
                  <th>Price</th>
                </tr>
                {details.map((detail, i) => {
                  const { name, color, body, display, price } = detail;
                  tablePrice = tablePrice + price;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{name}</td>
                      <td>{color}</td>
                      <td>{body}</td>
                      <td>{display}</td>
                      <td>{`Rs. ${price}`}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={5}></td>
                  <td>{`Rs. ${tablePrice}`}</td>
                </tr>
              </Fragment>
            );
          })}
          <tr>
            <td colSpan={2}></td>
            <td>{`Rs. ${totalPrice}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PDFReport;

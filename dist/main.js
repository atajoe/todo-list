(()=>{"use strict";class e{constructor(e){this.title=e,this.todoList=[]}}let t=[];const o=document.querySelector("#home"),r=document.querySelector(".newprojectform"),c=document.querySelector("#project-master"),l=document.querySelector("#submit_todo"),n=document.querySelector("#submit_project"),s=document.querySelector("#project"),i=document.querySelector(".results");document.querySelector(".project-list");let u=document.querySelectorAll(".project-item");o.addEventListener("click",(e=>{console.log("lmfaooo")})),c.addEventListener("click",(e=>{newprojectformaster.style.transform="scale(1)"})),n.addEventListener("click",(o=>{o.preventDefault();let r=document.getElementById("newprojectformaster").title.value,c=new e(r);t.push(c),(e=>{const t=document.querySelector(".project-list");let o=document.createElement("div");o.className="project-item",o.id="project-item",o.setAttribute("project",`${e}`),o.innerHTML=e,t.appendChild(o)})(r),newprojectformaster.style.transform="scale(0)",i.textContent=JSON.stringify(t),console.log(u),console.log(t)})),s.addEventListener("click",(e=>{console.log("lmfaooo"),r.style.transform="scale(1)"})),l.addEventListener("click",(e=>{e.preventDefault();let o=function(){let e=document.querySelector(".newprojectform"),t={};return t.title=e.title.value,t.description=e.description.value,t.date=e.date.value,t}();console.log(o),t[0].todoList.push(o),r.style.transform="scale(0)",i.innerHTML=JSON.stringify(t)})),u.forEach((e=>{e.addEventListener("click",(e=>{console.log(e.target),console.log("works!")}))})),console.log("testing")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBdURlLE1BQU1BLEVBQ2pCQyxZQUFZQyxHQUNSQyxLQUFLRCxNQUFRQSxFQUNiQyxLQUFLQyxTQUFXLEVBQ3BCLEVDckRKLElBQUlDLEVBQXFCLEdBRXpCLE1BQU1DLEVBQWFDLFNBQVNDLGNBQWMsU0FDcENDLEVBQWlCRixTQUFTQyxjQUFjLG1CQUN4Q0UsRUFBb0JILFNBQVNDLGNBQWMsbUJBQzNDRyxFQUFxQkosU0FBU0MsY0FBYyxnQkFDNUNJLEVBQXdCTCxTQUFTQyxjQUFjLG1CQUMvQ0ssRUFBaUJOLFNBQVNDLGNBQWMsWUFDeENNLEVBQVVQLFNBQVNDLGNBQWMsWUFDbEJELFNBQVNDLGNBQWMsaUJBQzVDLElBQUlPLEVBQWVSLFNBQVNTLGlCQUFpQixpQkErQjdDVixFQUFXVyxpQkFBaUIsU0FBVUMsSUFDbENDLFFBQVFDLElBQUksVUFBUyxJQUl6QlYsRUFBa0JPLGlCQUFpQixTQUFVQyxJQUN6Q0csb0JBQW9CQyxNQUFNQyxVQUFZLFVBQVUsSUFHcERYLEVBQXNCSyxpQkFBaUIsU0FBVUMsSUFDN0NBLEVBQUVNLGlCQUVGLElBQUlDLEVBRFNsQixTQUFTbUIsZUFBZSx1QkFDWnhCLE1BQU15QixNQUMzQkMsRUFBYyxJQUFJNUIsRUFBUXlCLEdBQzlCcEIsRUFBbUJ3QixLQUFLRCxHQTFCRyxDQUFDRSxJQUM1QixNQUFNQyxFQUFZeEIsU0FBU0MsY0FBYyxpQkFDekMsSUFBSXdCLEVBQU16QixTQUFTMEIsY0FBYyxPQUNqQ0QsRUFBSUUsVUFBWSxlQUNoQkYsRUFBSUcsR0FBSyxlQUNUSCxFQUFJSSxhQUFhLFVBQVUsR0FBR04sS0FDOUJFLEVBQUlLLFVBQVlQLEVBQ2hCQyxFQUFVTyxZQUFZTixFQUNoQixFQW1CTk8sQ0FBeUJkLEdBQ3pCSixvQkFBb0JDLE1BQU1DLFVBQVksV0FDdENULEVBQVEwQixZQUFjQyxLQUFLQyxVQUFVckMsR0FDckNjLFFBQVFDLElBQUlMLEdBQ1pJLFFBQVFDLElBQUlmLEVBQWtCLElBS2xDUSxFQUFlSSxpQkFBaUIsU0FBVUMsSUFDdENDLFFBQVFDLElBQUksV0FDWlgsRUFBZWEsTUFBTUMsVUFBWSxVQUFVLElBRy9DWixFQUFtQk0saUJBQWlCLFNBQVVDLElBQzFDQSxFQUFFTSxpQkFDRixJQUFJbUIsRUM1Q1IsV0FDSSxJQUFJQyxFQUFPckMsU0FBU0MsY0FBYyxtQkFDOUJxQyxFQUFhLENBQUMsRUFPbEIsT0FIQUEsRUFBa0IsTUFBSUQsRUFBSzFDLE1BQU15QixNQUNqQ2tCLEVBQXdCLFlBQUlELEVBQUtFLFlBQVluQixNQUM3Q2tCLEVBQWlCLEtBQUlELEVBQUtHLEtBQUtwQixNQUN4QmtCLENBQ1gsQ0RrQ2lCRyxHQUNiN0IsUUFBUUMsSUFBSXVCLEdBQ1p0QyxFQUFtQixHQUFHRCxTQUFTeUIsS0FBS2MsR0FDcENsQyxFQUFlYSxNQUFNQyxVQUFZLFdBQ2pDVCxFQUFRdUIsVUFBWUksS0FBS0MsVUFBVXJDLEVBQWtCLElBSWpDVSxFQUFha0MsU0FBUUMsSUFDekNBLEVBQWNqQyxpQkFBaUIsU0FBVUMsSUFDckNDLFFBQVFDLElBQUlGLEVBQUVpQyxRQUNkaEMsUUFBUUMsSUFBSSxTQUFRLEdBQ3ZCLElBSURELFFBQVFDLElBQUksVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgbmV3VG9EbyB9IGZyb20gXCIuL3RvZG8uanNcIlxyXG5cclxuLy8gY2xhc3MgUHJvamVjdCB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XHJcbi8vICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbi8vICAgICAgICAgdGhpcy50b2RvTGlzdCA9IFtdXHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gbmV3dG9EbyAoKSB7XHJcbi8vICAgICByZXR1cm4gJ1RvZG8gMTEhIDopJ1xyXG4vLyB9XHJcblxyXG5cclxuLy8gbGV0IHByb2plY3RfMSA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDEnKVxyXG5cclxuLy8gcHJvamVjdF8xLnRvZG9MaXN0LnB1c2gobmV3VG9EbygpKVxyXG4vLyBwcm9qZWN0XzEudG9kb0xpc3QucHVzaChuZXdUb0RvKCkpXHJcbi8vIHByb2plY3RfMS50b2RvTGlzdC5wdXNoKG5ld1RvRG8oKSlcclxuXHJcblxyXG4vLyBsZXQgcHJvamVjdF8yID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMicpXHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0XzEudG9kb0xpc3RbMF0udGl0bGUpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RfMilcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IG5ld1Byb2plY3QgPSAoKCkgPT4ge1xyXG4vLyAgICAgICAgIGxldCBuZXdfcHJvamVjdCA9IHt9O1xyXG4vLyAgICAgICAgIGxldCBzdHI7XHJcbi8vICAgICAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgICAgICB0YWxrIDogKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvIHRoaXMgaXMgeW91ciBmdWxsIHByb2plY3QgZGVzY3JpcHRpb246ICR7dGl0bGV9LCAke2Rlc2NyaXB0aW9ufSwgJHtkYXRlfWApXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHByaW50X2xpc3Rfb2ZfcHJvamVjdHMgOiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMobmV3X3Byb2plY3QpKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgYWRkZXh0cmFwcm9qZWN0IDogKHByb2plY3RfdGl0bGUpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwcm9qZWN0X3RpdGxlXHJcbi8vICAgICAgICAgICAgICAgICBuZXdfcHJvamVjdFtzdHJdID0gW11cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgYWRkVG9Eb05ldyA6IChuZXd0b0RvKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBuZXdfcHJvamVjdFtzdHJdLnB1c2gobmV3dG9EbylcclxuLy8gICAgICAgICAgICAgICAgIC8vIG5ld19wcm9qZWN0LnJhbmRvbW9iamVjdDEucHVzaChuZXd0b0RvKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyB9KSgpXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbXVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBuZXdUb0RvIH0gZnJvbSBcIi4vbW9kdWxlcy90b2RvLmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0ICBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcclxuXHJcblxyXG4vLyBcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBwcm9qZWN0c19jb250YWluZXIgPSBbXTtcclxuXHJcbmNvbnN0IGhvbWVidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpXHJcbmNvbnN0IG5ld3Byb2plY3Rmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3Byb2plY3Rmb3JtJylcclxuY29uc3Qgb3Blbl9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1tYXN0ZXInKVxyXG5jb25zdCBzdWJtaXRfdG9kb19idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0X3RvZG8nKVxyXG5jb25zdCBzdWJtaXRfcHJvamVjdF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0X3Byb2plY3QnKVxyXG5jb25zdCBvcGVuX3RvZG9fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JylcclxuY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJylcclxuY29uc3QgcHJvamVjdF9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpXHJcbmxldCBwcm9qZWN0X2l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJylcclxuXHJcbi8vIGZ1bmN0aW9uIG5ld3Byb2plY3RGb3JtRnVuY3Rpb24oKXtcclxuLy8gICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Byb2plY3Rmb3JtYXN0ZXInKVxyXG4vLyAgICAgbGV0IHRpdGxlID0gZm9ybS50aXRsZS52YWx1ZVxyXG4vLyAgICAgY29uc29sZS5sb2codGl0bGUpXHJcbi8vICAgICByZXR1cm4gdGl0bGVcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZm9ybUZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cHJvamVjdGZvcm0nKVxyXG4vLyAgICAgbGV0IG5ld29iamVjdCA9IHt9XHJcbi8vICAgICBuZXdvYmplY3RbJ3RpdGxlJ10gPSBmb3JtLnRpdGxlLnZhbHVlXHJcbi8vICAgICBuZXdvYmplY3RbJ2Rlc2NyaXB0aW9uJ10gPSBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlXHJcbi8vICAgICBuZXdvYmplY3RbJ2RhdGUnXSA9IGZvcm0uZGF0ZS52YWx1ZVxyXG4gICAgXHJcbi8vICAgICByZXR1cm4gbmV3b2JqZWN0XHJcbi8vIH1cclxuXHJcbmxldCBwcm9qZWN0RGlzcGxheUNvbnRyb2xsZXIgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc05hbWUgPSAncHJvamVjdC1pdGVtJ1xyXG4gICAgZGl2LmlkID0gJ3Byb2plY3QtaXRlbSdcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0XCIsYCR7cHJvamVjdH1gKVxyXG4gICAgZGl2LmlubmVySFRNTCA9IHByb2plY3RcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXHJcbiAgICByZXR1cm47XHJcbn07XHJcblxyXG5cclxuaG9tZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2xtZmFvb28nKVxyXG59KVxyXG5cclxuXHJcbm9wZW5fcHJvamVjdF9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgbmV3cHJvamVjdGZvcm1hc3Rlci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbn0pXHJcblxyXG5zdWJtaXRfcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cHJvamVjdGZvcm1hc3RlcicpXHJcbiAgICBsZXQgcHJvamVjdF90aXRsZSA9IGZvcm0udGl0bGUudmFsdWVcclxuICAgIGxldCBuZXdfcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RfdGl0bGUpXHJcbiAgICBwcm9qZWN0c19jb250YWluZXIucHVzaChuZXdfcHJvamVjdClcclxuICAgIHByb2plY3REaXNwbGF5Q29udHJvbGxlcihwcm9qZWN0X3RpdGxlKVxyXG4gICAgbmV3cHJvamVjdGZvcm1hc3Rlci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbiAgICByZXN1bHRzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNfY29udGFpbmVyKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdF9pdGVtKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNfY29udGFpbmVyKVxyXG59KVxyXG5cclxuXHJcblxyXG5vcGVuX3RvZG9fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ2xtZmFvb28nKVxyXG4gICAgbmV3cHJvamVjdGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG59KVxyXG5cclxuc3VibWl0X3RvZG9fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgbmV3bG9sID0gbmV3VG9EbygpO1xyXG4gICAgY29uc29sZS5sb2cobmV3bG9sKVxyXG4gICAgcHJvamVjdHNfY29udGFpbmVyWzBdLnRvZG9MaXN0LnB1c2gobmV3bG9sKVxyXG4gICAgbmV3cHJvamVjdGZvcm0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xyXG4gICAgcmVzdWx0cy5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c19jb250YWluZXIpXHJcblxyXG59KVxyXG5cclxubGV0IHByb2plY3Rsb2wgPSAoKCkgPT4gcHJvamVjdF9pdGVtLmZvckVhY2gocHJvamVjdF9jaGlsZCA9PiB7XHJcbiAgICBwcm9qZWN0X2NoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICBjb25zb2xlLmxvZygnd29ya3MhJylcclxuICAgIH0pXHJcbn0pKSgpXHJcblxyXG5sZXQgcHJvamVjdGxvbDIgPSAoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3RpbmcnKVxyXG59KSgpXHJcblxyXG5cclxuXHJcbi8vIHByb2plY3RfaXRlbXMuZm9yRWFjaChwcm9qZWN0X2l0ZW0gPT4ge1xyXG4vLyAgICAgcHJvamVjdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcblxyXG4vLyBwcm9qZWN0X2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbi8vICAgICBjb25zdCBwcm9qZWN0X2l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtJylcclxuLy8gICAgIHByb2plY3RfaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnYWRkZWQgY2hpbGQhJylcclxuLy8gICAgIH0pXHJcbi8vICAgICAvLyBlLnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LWl0ZW1cIiA/IGRvbV9tYW5pcHVsYXRlKGUudGFyZ2V0LmRhdGFzZXQpIDogY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHBhcmVudCcpXHJcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuLy8gfSlcclxuXHJcblxyXG5cclxuY29uc3QgZG9tX21hbmlwdWxhdGUgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KVxyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKXtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codHJ1ZSlcclxuICAgIH1cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxyXG4gICAgcmV0dXJuO1xyXG59IiwiLy8gZnVuY3Rpb24gZm9ybUZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cHJvamVjdGZvcm0nKVxyXG4vLyAgICAgbGV0IG5ld19vYmplY3QgPSB7fVxyXG4vLyAgICAgbmV3X29iamVjdFsndGl0bGUnXSA9IGZvcm0udGl0bGUudmFsdWVcclxuLy8gICAgIG5ld19vYmplY3RbJ2Rlc2NyaXB0aW9uJ10gPSBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlXHJcbi8vICAgICBuZXdfb2JqZWN0WydkYXRlJ10gPSBmb3JtLmRhdGUudmFsdWVcclxuICAgIFxyXG4vLyAgICAgcmV0dXJuIG5ld19vYmplY3RcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBuZXdQcm9qZWN0ID0gKCgpID0+IHtcclxuLy8gICAgICAgICBsZXQgbmV3X3Byb2plY3QgPSB7fTtcclxuLy8gICAgICAgICBsZXQgc3RyO1xyXG4vLyAgICAgICAgIHJldHVybntcclxuLy8gICAgICAgICAgICAgdGFsayA6ICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZbyB0aGlzIGlzIHlvdXIgZnVsbCBwcm9qZWN0IGRlc2NyaXB0aW9uOiAke3RpdGxlfSwgJHtkZXNjcmlwdGlvbn0sICR7ZGF0ZX1gKVxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBwcmludF9saXN0X29mX3Byb2plY3RzIDogKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKG5ld19wcm9qZWN0KSk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGFkZGV4dHJhcHJvamVjdCA6IChwcm9qZWN0X3RpdGxlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBsZXQgc3RyID0gcHJvamVjdF90aXRsZVxyXG4vLyAgICAgICAgICAgICAgICAgbmV3X3Byb2plY3Rbc3RyXSA9IFtdXHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIGFkZFRvRG9OZXcgOiAobmV3dG9EbykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbmV3X3Byb2plY3Rbc3RyXS5wdXNoKG5ld3RvRG8pXHJcbi8vICAgICAgICAgICAgICAgICAvLyBuZXdfcHJvamVjdC5yYW5kb21vYmplY3QxLnB1c2gobmV3dG9EbylcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gfSkoKVxyXG5cclxuZnVuY3Rpb24gbmV3VG9Ebygpe1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cHJvamVjdGZvcm0nKVxyXG4gICAgbGV0IG5ld19vYmplY3QgPSB7fTtcclxuICAgIC8vIG5ld19vYmplY3QudGl0bGUgPSAnVG8tRG8gMSdcclxuICAgIC8vIG5ld19vYmplY3QuZGF0ZSA9ICcwOS0wNC0yMDIyJ1xyXG4gICAgLy8gbmV3X29iamVjdC5kZXNjcmlwdGlvbiA9ICdXYWxraW5nIG15IGRvZyB0b2RheSdcclxuICAgIG5ld19vYmplY3RbJ3RpdGxlJ10gPSBmb3JtLnRpdGxlLnZhbHVlXHJcbiAgICBuZXdfb2JqZWN0WydkZXNjcmlwdGlvbiddID0gZm9ybS5kZXNjcmlwdGlvbi52YWx1ZVxyXG4gICAgbmV3X29iamVjdFsnZGF0ZSddID0gZm9ybS5kYXRlLnZhbHVlXHJcbiAgICByZXR1cm4gbmV3X29iamVjdFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBuZXdUb0RvIH07Il0sIm5hbWVzIjpbIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwidGhpcyIsInRvZG9MaXN0IiwicHJvamVjdHNfY29udGFpbmVyIiwiaG9tZWJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld3Byb2plY3Rmb3JtIiwib3Blbl9wcm9qZWN0X2Zvcm0iLCJzdWJtaXRfdG9kb19idXR0b24iLCJzdWJtaXRfcHJvamVjdF9idXR0b24iLCJvcGVuX3RvZG9fZm9ybSIsInJlc3VsdHMiLCJwcm9qZWN0X2l0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwibmV3cHJvamVjdGZvcm1hc3RlciIsInN0eWxlIiwidHJhbnNmb3JtIiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0X3RpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm5ld19wcm9qZWN0IiwicHVzaCIsInByb2plY3QiLCJjb250YWluZXIiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInByb2plY3REaXNwbGF5Q29udHJvbGxlciIsInRleHRDb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld2xvbCIsImZvcm0iLCJuZXdfb2JqZWN0IiwiZGVzY3JpcHRpb24iLCJkYXRlIiwibmV3VG9EbyIsImZvckVhY2giLCJwcm9qZWN0X2NoaWxkIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==